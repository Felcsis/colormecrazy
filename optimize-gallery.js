import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Konfiguráció
const INPUT_DIR = path.join(__dirname, 'temp-gallery-images'); // Ide másold be a képeket
const OUTPUT_DIR = path.join(__dirname, 'public/images/gallery');
const QUALITY = 80; // WebP minőség (1-100)
const MAX_WIDTH = 1200; // Maximum szélesség pixel-ben
const MAX_HEIGHT = 1200; // Maximum magasság pixel-ben

// Létrehozza az output mappát ha nem létezik
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Létrehozza az input mappát ha nem létezik
if (!fs.existsSync(INPUT_DIR)) {
  fs.mkdirSync(INPUT_DIR, { recursive: true });
  console.log(`📁 Létrehoztam a temp-gallery-images mappát.`);
  console.log(`   Másold ide a képeket, amiket optimalizálni szeretnél!`);
  console.log(`   Támogatott formátumok: jpg, jpeg, png, webp`);
  process.exit(0);
}

async function optimizeImage(inputPath, outputPath) {
  try {
    const stats = fs.statSync(inputPath);
    const sizeBefore = (stats.size / 1024).toFixed(2);

    await sharp(inputPath)
      .resize(MAX_WIDTH, MAX_HEIGHT, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality: QUALITY })
      .toFile(outputPath);

    const statsAfter = fs.statSync(outputPath);
    const sizeAfter = (statsAfter.size / 1024).toFixed(2);
    const reduction = ((1 - statsAfter.size / stats.size) * 100).toFixed(1);

    console.log(`✅ ${path.basename(inputPath)}`);
    console.log(`   ${sizeBefore} KB → ${sizeAfter} KB (${reduction}% csökkentés)`);
  } catch (error) {
    console.error(`❌ Hiba: ${path.basename(inputPath)} - ${error.message}`);
  }
}

async function processGallery() {
  console.log('🖼️  Galéria képek optimalizálása...\n');

  const files = fs.readdirSync(INPUT_DIR);
  const imageFiles = files.filter(file =>
    /\.(jpg|jpeg|png|webp)$/i.test(file)
  );

  if (imageFiles.length === 0) {
    console.log('⚠️  Nincsenek képek a temp-gallery-images mappában!');
    console.log('   Másold ide a képeket és futtasd újra a scriptet.');
    return;
  }

  console.log(`📊 ${imageFiles.length} kép feldolgozása...\n`);

  for (const file of imageFiles) {
    const inputPath = path.join(INPUT_DIR, file);
    const outputFileName = file.replace(/\.(jpg|jpeg|png|webp)$/i, '.webp');
    const outputPath = path.join(OUTPUT_DIR, outputFileName);

    await optimizeImage(inputPath, outputPath);
  }

  console.log('\n✨ Optimalizálás kész!');
  console.log(`📁 A képek itt találhatók: public/images/gallery/`);
  console.log('\n💡 Következő lépés:');
  console.log('   Futtasd: bun generate-gallery-list.js');
  console.log('   Ez automatikusan frissíti a Gallery.jsx fájlt a képekkel.');
}

processGallery();
