-- Drop existing tables if they exist
DROP TABLE IF EXISTS sessions CASCADE;
DROP TABLE IF EXISTS schedules CASCADE;
DROP TABLE IF EXISTS model_bookings CASCADE;
DROP TABLE IF EXISTS product_shades CASCADE;
DROP TABLE IF EXISTS inventory_products CASCADE;
DROP TABLE IF EXISTS incomes CASCADE;
DROP TABLE IF EXISTS expenses CASCADE;
DROP TABLE IF EXISTS settings CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- Users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  type VARCHAR(20) NOT NULL CHECK (type IN ('admin', 'student')),
  color VARCHAR(20) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Sessions table
CREATE TABLE sessions (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  session_token VARCHAR(255) NOT NULL UNIQUE,
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_sessions_token ON sessions(session_token);
CREATE INDEX idx_sessions_user_id ON sessions(user_id);
CREATE INDEX idx_sessions_expires_at ON sessions(expires_at);

-- Schedules table
CREATE TABLE schedules (
  id SERIAL PRIMARY KEY,
  date DATE NOT NULL,
  shift VARCHAR(20) NOT NULL CHECK (shift IN ('Délelőtt', 'Délután')),
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(date, shift, user_id)
);

CREATE INDEX idx_schedules_date ON schedules(date);
CREATE INDEX idx_schedules_user_id ON schedules(user_id);

-- Model bookings table
CREATE TABLE model_bookings (
  id VARCHAR(50) PRIMARY KEY,
  student_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  model_name VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  time VARCHAR(20) NOT NULL,
  service VARCHAR(255) NOT NULL,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_model_bookings_student_id ON model_bookings(student_id);
CREATE INDEX idx_model_bookings_date ON model_bookings(date);

-- Inventory products table
CREATE TABLE inventory_products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  brand VARCHAR(100) NOT NULL,
  category VARCHAR(100) NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 0,
  min_stock INTEGER NOT NULL DEFAULT 0,
  has_shades BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_inventory_products_brand ON inventory_products(brand);
CREATE INDEX idx_inventory_products_category ON inventory_products(category);

-- Product shades table
CREATE TABLE product_shades (
  id SERIAL PRIMARY KEY,
  product_id INTEGER NOT NULL REFERENCES inventory_products(id) ON DELETE CASCADE,
  code VARCHAR(50) NOT NULL,
  name VARCHAR(255) NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_product_shades_product_id ON product_shades(product_id);

-- Incomes table
CREATE TABLE incomes (
  id SERIAL PRIMARY KEY,
  date DATE NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  type VARCHAR(100) NOT NULL,
  payment_method VARCHAR(50) NOT NULL,
  created_by INTEGER NOT NULL REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_incomes_date ON incomes(date);
CREATE INDEX idx_incomes_created_by ON incomes(created_by);

-- Expenses table
CREATE TABLE expenses (
  id SERIAL PRIMARY KEY,
  date DATE NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  category VARCHAR(100) NOT NULL,
  created_by INTEGER NOT NULL REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_expenses_date ON expenses(date);
CREATE INDEX idx_expenses_created_by ON expenses(created_by);

-- Settings table (key-value store)
CREATE TABLE settings (
  key VARCHAR(100) PRIMARY KEY,
  value JSONB NOT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Trigger to update timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_sessions_updated_at BEFORE UPDATE ON sessions
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_model_bookings_updated_at BEFORE UPDATE ON model_bookings
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_inventory_products_updated_at BEFORE UPDATE ON inventory_products
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_product_shades_updated_at BEFORE UPDATE ON product_shades
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_settings_updated_at BEFORE UPDATE ON settings
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
