import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBoxes,
  faExclamationTriangle,
  faMoneyBillWave,
  faChartLine,
  faSearch,
  faFilter
} from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../context/AuthContext';
import { api } from '../../services/api';
import './Inventory.css';

// Import database for categories
import databaseData from '../../data/database.json';

function MatrixProducts() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [categories] = useState(databaseData.inventory.categories);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load Matrix products from API
    async function loadProducts() {
      try {
        const { products: matrixProducts } = await api.getProducts('Matrix');
        setProducts(matrixProducts);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load products:', error);
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Calculate statistics - memoized
  const { totalProducts, lowStockProducts, totalValue } = useMemo(() => {
    const total = products.reduce((sum, p) => sum + p.quantity, 0);
    const lowStock = products.filter(p => p.quantity <= p.minStock);
    const value = products.reduce((sum, p) => sum + (p.quantity * p.pricePerUnit), 0);
    return { totalProducts: total, lowStockProducts: lowStock, totalValue: value };
  }, [products]);

  // Filter products - memoized
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            product.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  return (
    <div className="inventory-container">
      <div className="inventory-content">
        {/* Header */}
        <div className="inventory-header">
          <div>
            <h1>Matrix Termékek</h1>
            <p className="welcome-text">Üdv, <strong>{currentUser.name}</strong>!</p>
          </div>
          <div className="header-actions">
            <button onClick={() => navigate('/konoha/keszlet')} className="back-btn">
              ← Készletkezelés
            </button>
            <button onClick={handleLogout} className="logout-btn">
              Kijelentkezés
            </button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon" style={{ color: '#8B7EB8' }}>
              <FontAwesomeIcon icon={faBoxes} />
            </div>
            <div className="stat-info">
              <div className="stat-value">{totalProducts}</div>
              <div className="stat-label">Összes termék</div>
            </div>
          </div>

          <div className="stat-card alert">
            <div className="stat-icon" style={{ color: '#ee5a6f' }}>
              <FontAwesomeIcon icon={faExclamationTriangle} />
            </div>
            <div className="stat-info">
              <div className="stat-value">{lowStockProducts.length}</div>
              <div className="stat-label">Alacsony készlet</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon" style={{ color: '#C098E8' }}>
              <FontAwesomeIcon icon={faMoneyBillWave} />
            </div>
            <div className="stat-info">
              <div className="stat-value">{(totalValue / 1000).toFixed(0)}k Ft</div>
              <div className="stat-label">Készlet értéke</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon" style={{ color: '#F4B8D8' }}>
              <FontAwesomeIcon icon={faChartLine} />
            </div>
            <div className="stat-info">
              <div className="stat-value">{products.length}</div>
              <div className="stat-label">Termék típusok</div>
            </div>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="inventory-controls">
          <div className="search-box">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input
              type="text"
              placeholder="Keresés név vagy márka szerint..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="category-filters">
            <button
              className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              <FontAwesomeIcon icon={faFilter} /> Összes
            </button>
            {Object.entries(categories).map(([key, cat]) => (
              <button
                key={key}
                className={`filter-btn ${selectedCategory === key ? 'active' : ''}`}
                onClick={() => setSelectedCategory(key)}
                style={{ '--category-color': cat.color }}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid - Tarot Card Style */}
        <div className="products-grid">
          {filteredProducts.map(product => {
            const category = categories[product.category];
            const isLowStock = product.quantity <= product.minStock;
            const isClickable = product.hasShades;

            return (
              <div
                key={product.id}
                className={`product-card ${isLowStock ? 'low-stock' : ''} ${isClickable ? 'clickable' : ''}`}
                data-category={product.category}
                style={{ '--product-color': category.color }}
                onClick={() => isClickable && navigate(`/konoha/keszlet/termek/${product.id}`)}
              >
                {/* Low stock badge */}
                {isLowStock && (
                  <div className="low-stock-badge">
                    <FontAwesomeIcon icon={faExclamationTriangle} /> Alacsony készlet
                  </div>
                )}

                {/* Product info */}
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-brand">{product.brand}</div>
                  <div className="product-subcategory">{product.subcategory}</div>
                </div>

                {/* Divider line */}
                <div className="card-divider"></div>

                {/* Stock info */}
                <div className="product-stock">
                  <div className="stock-quantity">
                    <span className="stock-value">{product.quantity}</span>
                    <span className="stock-unit">{product.unit}</span>
                  </div>
                  <div className="stock-min">Min: {product.minStock} {product.unit}</div>
                </div>

                {/* Price & Supplier */}
                <div className="product-details">
                  <div className="product-price">{product.pricePerUnit.toLocaleString()} Ft / {product.unit}</div>
                  <div className="product-supplier">{product.supplier}</div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="no-products">
            <p>Nincs találat a megadott szűrőkre.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MatrixProducts;
