import bcrypt from 'bcrypt';
import { query, getClient } from '../config/database.js';
import { readFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SALT_ROUNDS = 10;

interface User {
  id: string;
  name: string;
  password: string;
  type: 'admin' | 'student';
  color: string;
}

interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  subcategory?: string;
  quantity: number;
  unit?: string;
  minStock: number;
  pricePerUnit?: number;
  supplier?: string;
  lastRestocked?: string;
  hasShades?: boolean;
  shades?: Array<{
    code: string;
    name: string;
    quantity: number;
    minStock?: number;
  }>;
}

async function loadDatabaseJSON() {
  const dbPath = join(__dirname, '../../../src/data/database.json');
  const content = readFileSync(dbPath, 'utf-8');
  return JSON.parse(content);
}

async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, SALT_ROUNDS);
}

async function migrateUsers(users: User[]) {
  console.log('Migrating users...');

  for (const user of users) {
    const passwordHash = await hashPassword(user.password);

    await query(
      `INSERT INTO users (name, password_hash, type, color)
       VALUES ($1, $2, $3, $4)
       ON CONFLICT (name) DO UPDATE
       SET password_hash = $2, type = $3, color = $4`,
      [user.name, passwordHash, user.type, user.color]
    );

    console.log(`  ✓ Migrated user: ${user.name}`);
  }
}

async function migrateSchedules(schedules: Record<string, string[]>) {
  console.log('Migrating schedules...');

  // Clear existing schedules
  await query('DELETE FROM schedules');

  for (const [key, userNames] of Object.entries(schedules)) {
    // Parse key: "2026-02-03-Délelőtt" -> date='2026-02-03', shift='Délelőtt'
    const parts = key.split('-');
    const date = `${parts[0]}-${parts[1]}-${parts[2]}`;
    const shift = parts.slice(3).join('-');

    for (const userName of userNames) {
      // Get user ID from name
      const userResult = await query(
        'SELECT id FROM users WHERE name = $1',
        [userName.charAt(0).toUpperCase() + userName.slice(1)]
      );

      if (userResult.rows.length > 0) {
        const userId = userResult.rows[0].id;

        await query(
          `INSERT INTO schedules (date, shift, user_id)
           VALUES ($1, $2, $3)
           ON CONFLICT (date, shift, user_id) DO NOTHING`,
          [date, shift, userId]
        );

        console.log(`  ✓ Schedule: ${date} ${shift} - ${userName}`);
      }
    }
  }
}

async function migrateModelBookings(bookings: any[]) {
  console.log('Migrating model bookings...');

  // Clear existing bookings
  await query('DELETE FROM model_bookings');

  for (const booking of bookings) {
    // Get user ID from studentId
    const userName = booking.studentId.charAt(0).toUpperCase() + booking.studentId.slice(1);
    const userResult = await query(
      'SELECT id FROM users WHERE name = $1',
      [userName]
    );

    if (userResult.rows.length > 0) {
      const userId = userResult.rows[0].id;

      await query(
        `INSERT INTO model_bookings (id, student_id, model_name, date, time, service, notes)
         VALUES ($1, $2, $3, $4, $5, $6, $7)`,
        [
          booking.id.toString(),
          userId,
          booking.modelName,
          booking.date,
          booking.time,
          booking.service,
          booking.notes || null
        ]
      );

      console.log(`  ✓ Booking: ${booking.modelName} - ${booking.date}`);
    }
  }
}

async function migrateInventory(inventory: { products: Product[] }) {
  console.log('Migrating inventory...');

  // Clear existing inventory
  await query('DELETE FROM product_shades');
  await query('DELETE FROM inventory_products');

  for (const product of inventory.products) {
    // Insert product
    const result = await query(
      `INSERT INTO inventory_products
       (name, brand, category, quantity, min_stock, has_shades)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id`,
      [
        product.name,
        product.brand,
        product.category,
        product.quantity,
        product.minStock,
        product.hasShades || false
      ]
    );

    const productId = result.rows[0].id;
    console.log(`  ✓ Product: ${product.name}`);

    // Insert shades if they exist
    if (product.shades && product.shades.length > 0) {
      for (const shade of product.shades) {
        await query(
          `INSERT INTO product_shades (product_id, code, name, quantity)
           VALUES ($1, $2, $3, $4)`,
          [productId, shade.code, shade.name, shade.quantity]
        );
      }
      console.log(`    ✓ ${product.shades.length} shades`);
    }
  }
}

async function migrateSettings(settings: any, serviceTypes: any) {
  console.log('Migrating settings...');

  await query(
    `INSERT INTO settings (key, value)
     VALUES ($1, $2)
     ON CONFLICT (key) DO UPDATE SET value = $2`,
    ['workSettings', JSON.stringify(settings)]
  );

  await query(
    `INSERT INTO settings (key, value)
     VALUES ($1, $2)
     ON CONFLICT (key) DO UPDATE SET value = $2`,
    ['serviceTypes', JSON.stringify(serviceTypes)]
  );

  console.log('  ✓ Settings migrated');
}

async function createSampleFinanceData() {
  console.log('Creating sample finance data...');

  // Get admin user ID (felcsi)
  const adminResult = await query(
    'SELECT id FROM users WHERE name = $1',
    ['Felcsi']
  );

  if (adminResult.rows.length === 0) {
    console.log('  ⚠ No admin user found, skipping finance data');
    return;
  }

  const adminId = adminResult.rows[0].id;

  // Sample incomes
  const sampleIncomes = [
    { date: '2026-01-28', amount: 15000, type: 'service', paymentMethod: 'cash' },
    { date: '2026-01-29', amount: 22000, type: 'service', paymentMethod: 'card' },
    { date: '2026-01-30', amount: 18000, type: 'product', paymentMethod: 'cash' },
  ];

  for (const income of sampleIncomes) {
    await query(
      `INSERT INTO incomes (date, amount, type, payment_method, created_by)
       VALUES ($1, $2, $3, $4, $5)`,
      [income.date, income.amount, income.type, income.paymentMethod, adminId]
    );
  }

  // Sample expenses
  const sampleExpenses = [
    { date: '2026-01-28', amount: 45000, category: 'products' },
    { date: '2026-01-29', amount: 8000, category: 'utilities' },
  ];

  for (const expense of sampleExpenses) {
    await query(
      `INSERT INTO expenses (date, amount, category, created_by)
       VALUES ($1, $2, $3, $4)`,
      [expense.date, expense.amount, expense.category, adminId]
    );
  }

  console.log('  ✓ Sample finance data created');
}

async function main() {
  console.log('Starting database migration...\n');

  const client = await getClient();

  try {
    await client.query('BEGIN');

    // Load database.json
    const db = await loadDatabaseJSON();

    // Run migrations
    await migrateUsers(db.users);
    await migrateSchedules(db.schedules);
    await migrateModelBookings(db.modelBookings);
    await migrateInventory(db.inventory);
    await migrateSettings(db.settings, db.serviceTypes);
    await createSampleFinanceData();

    await client.query('COMMIT');

    console.log('\n✅ Migration completed successfully!');
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('\n❌ Migration failed:', error);
    throw error;
  } finally {
    client.release();
    process.exit(0);
  }
}

main();
