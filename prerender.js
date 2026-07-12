/**
 * Prerender valódi (headless) böngészővel — puppeteer-core.
 *
 * A `vite build` után fut: minden publikus route-ot betölt egy headless
 * Chromiumban, megvárja, míg a React kirendereli a tartalmat + a
 * route-onkénti meta tageket, majd a kész HTML-t kiírja
 * `dist/<route>/index.html`-be. Így a Google és a közösségi crawler-ek
 * azonnal látják a tartalmat (nem üres SPA-t).
 *
 * A puppeteer-core NEM tölt le böngészőt telepítéskor → a Railway install
 * nem törik. A Chromiumot a környezet adja (PUPPETEER_EXECUTABLE_PATH,
 * vagy `which chromium`, vagy lokálisan a Google Chrome).
 *
 * SZÁNDÉKOSAN NEM-FATÁLIS: ha nincs böngésző vagy bármi hibázik, csak
 * figyelmeztet és 0-val lép ki — a deploy sose törik el emiatt (marad a
 * sima SPA + serve.json fallback).
 */
import http from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { execSync } from 'node:child_process';
import path from 'node:path';

const DIST = path.resolve('dist');
const ROUTES = ['/szolgaltatasok', '/galeria', '/oktatas', '/blog'];

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript',
  '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.webp': 'image/webp', '.woff': 'font/woff', '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
};

/** Böngésző-elérési út felderítése (env → PATH → macOS Chrome). */
function findBrowser() {
  if (process.env.PUPPETEER_EXECUTABLE_PATH) return process.env.PUPPETEER_EXECUTABLE_PATH;
  if (process.env.CHROME_BIN) return process.env.CHROME_BIN;
  for (const bin of ['chromium', 'chromium-browser', 'google-chrome-stable', 'google-chrome']) {
    try {
      const p = execSync(`command -v ${bin}`, { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
      if (p) return p;
    } catch {}
  }
  const mac = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  if (existsSync(mac)) return mac;
  return null;
}

/** Statikus szerver dist/-re, SPA-fallbackkel. */
function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer(async (req, res) => {
      try {
        const urlPath = decodeURIComponent(new URL(req.url, 'http://x').pathname);
        let filePath = path.join(DIST, urlPath);
        if (!existsSync(filePath) || urlPath.endsWith('/') || !path.extname(filePath)) {
          filePath = path.join(DIST, 'index.html'); // SPA fallback
        }
        const data = await readFile(filePath);
        res.setHeader('Content-Type', MIME[path.extname(filePath)] || 'application/octet-stream');
        res.end(data);
      } catch {
        res.statusCode = 404;
        res.end('not found');
      }
    });
    server.listen(0, () => resolve(server));
  });
}

async function main() {
  const execPath = findBrowser();
  if (!execPath) {
    console.warn('[prerender] ⚠ nincs elérhető böngésző — kihagyva (marad SPA + serve.json fallback)');
    return;
  }
  const puppeteer = (await import('puppeteer-core')).default;
  const server = await startServer();
  const port = server.address().port;
  const base = `http://localhost:${port}`;

  const browser = await puppeteer.launch({
    executablePath: execPath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  let ok = 0;
  for (const route of ROUTES) {
    try {
      const page = await browser.newPage();
      await page.goto(`${base}${route}`, { waitUntil: 'networkidle2', timeout: 20000 });
      // várunk, míg a #root-ban valós tartalom van
      await page.waitForFunction(
        () => {
          const r = document.getElementById('root');
          return r && r.children.length > 0 && r.textContent.trim().length > 40;
        },
        { timeout: 10000 },
      );
      const html = '<!DOCTYPE html>\n' + await page.evaluate(() => document.documentElement.outerHTML);
      const title = await page.title();
      await page.close();

      const outDir = path.join(DIST, route);
      await mkdir(outDir, { recursive: true });
      await writeFile(path.join(outDir, 'index.html'), html, 'utf8');
      console.log(`[prerender] ✓ ${route}  (${(html.length / 1024).toFixed(0)} kB, "${title.slice(0, 48)}")`);
      ok++;
    } catch (e) {
      console.warn(`[prerender] ⚠ ${route}: ${String(e.message || e).slice(0, 120)} — kihagyva`);
    }
  }

  await browser.close();
  server.close();
  console.log(`[prerender] kész: ${ok}/${ROUTES.length} route prerenderelve.`);
}

main().catch((e) => {
  console.warn('[prerender] kihagyva (nem-fatális hiba):', String(e.message || e).slice(0, 160));
  process.exit(0);
});
