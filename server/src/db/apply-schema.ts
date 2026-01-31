import { readFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { getClient } from '../config/database.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function applySchema() {
  console.log('Applying database schema...');

  const schemaPath = join(__dirname, 'schema.sql');
  const schema = readFileSync(schemaPath, 'utf-8');

  const client = await getClient();

  try {
    await client.query('BEGIN');
    await client.query(schema);
    await client.query('COMMIT');
    console.log('✅ Schema applied successfully!');
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('❌ Error applying schema:', error);
    throw error;
  } finally {
    client.release();
    process.exit(0);
  }
}

applySchema();
