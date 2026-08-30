/**
 * Instagram feed letöltése build időben.
 *
 * A `vite build` ELŐTT fut: az Instagram Graph API-tól lekéri a legutóbbi
 * posztokat és a követőszámot, majd kiírja őket a `public/instagram-feed.json`
 * fájlba. A weboldal ezt a statikus fájlt olvassa — így a látogató böngészője
 * soha nem lát hozzáférési kulcsot, és nem kell külső script sem.
 *
 * Szükséges környezeti változók (Railway → Variables):
 *   IG_ACCESS_TOKEN  – hosszú élettartamú Facebook/Instagram hozzáférési kulcs
 *   IG_USER_ID       – az Instagram üzleti fiók azonosítója (opcionális,
 *                      megadás nélkül a kulcshoz tartozó oldalból derül ki)
 *
 * SZÁNDÉKOSAN NEM-FATÁLIS: ha nincs kulcs vagy az API hibázik, a script
 * figyelmeztet és 0-val lép ki. Ilyenkor a szekció a galéria képeire esik
 * vissza, a deploy pedig nem törik el.
 *
 * A kulcs 60 naponta lejár – lásd INSTAGRAM_SETUP.md.
 */
import { writeFile, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const OUT = path.resolve('public/instagram-feed.json');
const LIMIT = 12;
const API = 'https://graph.facebook.com/v21.0';

const token = process.env.IG_ACCESS_TOKEN;
const userIdFromEnv = process.env.IG_USER_ID;

const warn = (msg) => console.warn(`[instagram] ${msg}`);

const getJson = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  if (data.error) {
    throw new Error(`${data.error.message} (kód: ${data.error.code})`);
  }
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return data;
};

// Ha nincs megadva IG_USER_ID, a kulcshoz tartozó oldalakból keressük ki
const resolveUserId = async () => {
  if (userIdFromEnv) return userIdFromEnv;

  const pages = await getJson(
    `${API}/me/accounts?fields=instagram_business_account&access_token=${token}`
  );
  const withIg = (pages.data || []).find((p) => p.instagram_business_account);
  if (!withIg) {
    throw new Error('a kulcshoz tartozó oldalakon nincs Instagram üzleti fiók');
  }
  return withIg.instagram_business_account.id;
};

const run = async () => {
  if (!token) {
    warn('nincs IG_ACCESS_TOKEN – kimarad, a szekció a galéria képeit mutatja');
    return;
  }

  const userId = await resolveUserId();

  const profile = await getJson(
    `${API}/${userId}?fields=username,followers_count,media_count&access_token=${token}`
  );

  const media = await getJson(
    `${API}/${userId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,like_count,comments_count&limit=${LIMIT}&access_token=${token}`
  );

  const posts = (media.data || [])
    // a videóknál a thumbnail a használható álló kép
    .map((m) => ({
      image: m.media_type === 'VIDEO' ? m.thumbnail_url : m.media_url,
      permalink: m.permalink,
      type: m.media_type,
      caption: (m.caption || '').split('\n')[0].slice(0, 120),
      likes: m.like_count ?? null,
      comments: m.comments_count ?? null,
      timestamp: m.timestamp
    }))
    .filter((p) => p.image);

  if (!posts.length) {
    warn('az API nem adott vissza posztot – marad a korábbi fájl');
    return;
  }

  const payload = {
    username: profile.username,
    followers: profile.followers_count ?? null,
    mediaCount: profile.media_count ?? null,
    fetchedAt: new Date().toISOString(),
    posts
  };

  await writeFile(OUT, JSON.stringify(payload, null, 2) + '\n', 'utf-8');
  console.log(
    `[instagram] ${posts.length} poszt mentve (@${profile.username}, ` +
    `${profile.followers_count ?? '?'} követő)`
  );
};

run().catch(async (err) => {
  warn(`nem sikerült a letöltés: ${err.message}`);

  if (existsSync(OUT)) {
    try {
      const prev = JSON.parse(await readFile(OUT, 'utf-8'));
      warn(`marad a korábbi mentés (${prev.posts?.length ?? 0} poszt, ${prev.fetchedAt})`);
    } catch {
      warn('a korábbi mentés olvashatatlan');
    }
  } else {
    warn('nincs korábbi mentés – a szekció a galéria képeit mutatja');
  }
  // szándékosan nem törjük el a buildet
});
