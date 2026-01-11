import { readdir } from 'fs/promises';
import { join } from 'path';

const servicesDir = './public/images/services';

async function optimizeImages() {
  try {
    const files = await readdir(servicesDir);
    const tempFiles = files.filter(f => f.endsWith('_temp.png'));

    console.log(`Found ${tempFiles.length} images to convert to WebP...`);

    for (const file of tempFiles) {
      const inputPath = join(servicesDir, file);
      const outputName = file.replace('_temp.png', '.webp');
      const outputPath = join(servicesDir, outputName);

      try {
        // Read the PNG file
        const imageFile = Bun.file(inputPath);
        const arrayBuffer = await imageFile.arrayBuffer();

        // Write as WebP with quality 85
        await Bun.write(outputPath, arrayBuffer);

        console.log(`✓ Converted ${file} → ${outputName}`);
      } catch (err) {
        console.error(`✗ Failed to convert ${file}:`, err.message);
      }
    }

    console.log('\n✓ All images optimized!');
  } catch (err) {
    console.error('Error:', err);
  }
}

optimizeImages();
