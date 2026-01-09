import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const portfolioDir = path.join(__dirname, 'public/images/portfolios');
const outputFile = path.join(__dirname, 'public/portfolio-images.json');

const result = {};

const members = ['anti', 'felcsi', 'gitta', 'lili', 'bogi'];

members.forEach(member => {
  const memberDir = path.join(portfolioDir, member);

  if (fs.existsSync(memberDir)) {
    const files = fs.readdirSync(memberDir)
      .filter(file => /\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i.test(file))
      .map(file => `/images/portfolios/${member}/${file}`);

    result[member] = files;
  } else {
    result[member] = [];
  }
});

fs.writeFileSync(outputFile, JSON.stringify(result, null, 2));
console.log('Portfolio images list generated successfully!');
console.log('Total images by member:');
Object.entries(result).forEach(([member, images]) => {
  console.log(`  ${member}: ${images.length} images`);
});
