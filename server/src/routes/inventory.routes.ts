import { Hono } from 'hono';
import { query } from '../config/database.js';
import { authMiddleware } from '../middleware/auth.js';

const inventory = new Hono();

// All routes require authentication
inventory.use('*', authMiddleware);

// GET /api/inventory/products?brand=Matrix
inventory.get('/products', async (c) => {
  try {
    const brand = c.req.query('brand');

    let sql = `
      SELECT id, name, brand, category, quantity, min_stock, has_shades
      FROM inventory_products
      WHERE 1=1
    `;
    const params: any[] = [];

    if (brand) {
      sql += ' AND brand = $1';
      params.push(brand);
    }

    sql += ' ORDER BY category, name';

    const result = await query(sql, params);

    const products = result.rows.map(row => ({
      id: row.id,
      name: row.name,
      brand: row.brand,
      category: row.category,
      quantity: row.quantity,
      minStock: row.min_stock,
      hasShades: row.has_shades
    }));

    return c.json({ products });
  } catch (error) {
    console.error('Get products error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// GET /api/inventory/products/:id
inventory.get('/products/:id', async (c) => {
  try {
    const id = c.req.param('id');

    // Get product
    const productResult = await query(
      `SELECT id, name, brand, category, quantity, min_stock, has_shades
       FROM inventory_products
       WHERE id = $1`,
      [id]
    );

    if (productResult.rows.length === 0) {
      return c.json({ error: 'Product not found' }, 404);
    }

    const product = {
      id: productResult.rows[0].id,
      name: productResult.rows[0].name,
      brand: productResult.rows[0].brand,
      category: productResult.rows[0].category,
      quantity: productResult.rows[0].quantity,
      minStock: productResult.rows[0].min_stock,
      hasShades: productResult.rows[0].has_shades,
      shades: [] as any[]
    };

    // Get shades if applicable
    if (product.hasShades) {
      const shadesResult = await query(
        `SELECT id, code, name, quantity
         FROM product_shades
         WHERE product_id = $1
         ORDER BY code`,
        [id]
      );

      product.shades = shadesResult.rows.map(row => ({
        id: row.id,
        code: row.code,
        name: row.name,
        quantity: row.quantity
      }));
    }

    return c.json({ product });
  } catch (error) {
    console.error('Get product error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// PUT /api/inventory/products/:id
// Body: { quantity }
inventory.put('/products/:id', async (c) => {
  try {
    const id = c.req.param('id');
    const { quantity } = await c.req.json();

    if (typeof quantity !== 'number' || quantity < 0) {
      return c.json({ error: 'Invalid quantity' }, 400);
    }

    const result = await query(
      `UPDATE inventory_products
       SET quantity = $1, updated_at = CURRENT_TIMESTAMP
       WHERE id = $2
       RETURNING *`,
      [quantity, id]
    );

    if (result.rowCount === 0) {
      return c.json({ error: 'Product not found' }, 404);
    }

    return c.json({ success: true, product: result.rows[0] });
  } catch (error) {
    console.error('Update product error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// PUT /api/inventory/shades/:id
// Body: { quantity }
inventory.put('/shades/:id', async (c) => {
  try {
    const id = c.req.param('id');
    const { quantity } = await c.req.json();

    if (typeof quantity !== 'number' || quantity < 0) {
      return c.json({ error: 'Invalid quantity' }, 400);
    }

    const result = await query(
      `UPDATE product_shades
       SET quantity = $1, updated_at = CURRENT_TIMESTAMP
       WHERE id = $2
       RETURNING *`,
      [quantity, id]
    );

    if (result.rowCount === 0) {
      return c.json({ error: 'Shade not found' }, 404);
    }

    return c.json({ success: true, shade: result.rows[0] });
  } catch (error) {
    console.error('Update shade error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

export default inventory;
