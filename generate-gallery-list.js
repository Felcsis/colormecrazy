import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GALLERY_DIR = path.join(__dirname, 'public/images/gallery');
const GALLERY_COMPONENT = path.join(__dirname, 'src/components/Gallery/Gallery.jsx');

function generateGalleryList() {
  console.log('📸 Galéria lista generálása...\n');

  // Ellenőrzi, hogy létezik-e a mappa
  if (!fs.existsSync(GALLERY_DIR)) {
    console.error('❌ A public/images/gallery mappa nem létezik!');
    console.log('   Futtasd először: bun optimize-gallery.js');
    process.exit(1);
  }

  // Képek beolvasása
  const files = fs.readdirSync(GALLERY_DIR);
  const imageFiles = files.filter(file => /\.webp$/i.test(file));

  if (imageFiles.length === 0) {
    console.log('⚠️  Nincsenek képek a gallery mappában!');
    console.log('   Futtasd először: bun optimize-gallery.js');
    process.exit(0);
  }

  console.log(`✅ ${imageFiles.length} kép találva\n`);

  // Galéria objektumok generálása
  const galleryData = imageFiles.map((file, index) => {
    const name = file.replace(/\.webp$/i, '');
    return {
      id: index + 1,
      src: `/images/gallery/${file}`,
      alt: name.replace(/[-_]/g, ' '),
      category: 'hair' // Később kategóriákat is adhatsz hozzá
    };
  });

  // Gallery komponens beolvasása
  let componentContent = fs.readFileSync(GALLERY_COMPONENT, 'utf8');

  // Képek lista cseréje
  const galleryArrayString = JSON.stringify(galleryData, null, 2)
    .replace(/"(\w+)":/g, '$1:') // Kulcsok idézőjeleinek eltávolítása
    .replace(/"/g, "'"); // Dupla idézőjelek cseréje szimpla-ra

  const newGalleryImages = `const galleryImages = ${galleryArrayString};`;

  // Regex a régi lista megtalálásához
  const galleryImagesRegex = /const galleryImages = \[[\s\S]*?\];/;

  if (galleryImagesRegex.test(componentContent)) {
    componentContent = componentContent.replace(galleryImagesRegex, newGalleryImages);
  } else {
    console.error('❌ Nem találom a galleryImages konstanst a Gallery.jsx fájlban!');
    process.exit(1);
  }

  // Fájl írása
  fs.writeFileSync(GALLERY_COMPONENT, componentContent, 'utf8');

  console.log('✨ Gallery.jsx sikeresen frissítve!');
  console.log(`📊 ${imageFiles.length} kép hozzáadva a galériához\n`);

  // Képek listázása
  console.log('Hozzáadott képek:');
  imageFiles.forEach((file, index) => {
    console.log(`  ${index + 1}. ${file}`);
  });
}

generateGalleryList();
