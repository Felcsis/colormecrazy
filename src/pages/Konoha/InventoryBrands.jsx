import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBoxes,
  faExclamationTriangle,
  faMoneyBillWave,
  faChartLine
} from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../context/AuthContext';
import './Inventory.css';

// Import database
import databaseData from '../../data/database.json';

// Brand configurations
const brands = [
  {
    id: 'matrix',
    name: 'Matrix',
    path: '/konoha/keszlet/matrix',
    color: '#8B7EB8'
  }
];

function InventoryBrands() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Calculate statistics for Matrix products - memoized
  const { matrixProducts, totalProducts, lowStockProducts, totalValue } = useMemo(() => {
    const products = databaseData.inventory.products.filter(p => p.brand.includes('Matrix')).map(product => {
      // Load shades from localStorage if available
      if (product.hasShades) {
        const savedShades = localStorage.getItem(`product-${product.id}-shades`);
        if (savedShades) {
          try {
            const shades = JSON.parse(savedShades);
            // Calculate total quantity from shades
            const totalQuantity = shades.reduce((sum, shade) => sum + (shade.quantity || 0), 0);
            return { ...product, quantity: totalQuantity, shades };
          } catch (e) {
            // If localStorage parse fails, use original data
          }
        }
      }
      return product;
    });

    const total = products.reduce((sum, p) => sum + p.quantity, 0);
    const lowStock = products.filter(p => p.quantity <= p.minStock);
    const value = products.reduce((sum, p) => sum + (p.quantity * (p.pricePerUnit || 0)), 0);
    return {
      matrixProducts: products,
      totalProducts: total,
      lowStockProducts: lowStock,
      totalValue: value
    };
  }, []);

  return (
    <div className="inventory-container">
      <div className="inventory-content">
        {/* Header */}
        <div className="inventory-header">
          <div>
            <h1>Készletkezelés</h1>
            <p className="welcome-text">Üdv, <strong>{currentUser.name}</strong>!</p>
          </div>
          <div className="header-actions">
            <button onClick={() => navigate('/konoha')} className="back-btn">
              ← Dashboard
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
              <div className="stat-value">{matrixProducts.length}</div>
              <div className="stat-label">Termék típusok</div>
            </div>
          </div>
        </div>

        {/* Brand Cards */}
        <div className="brands-section">
          <h2 className="section-title">Márkák</h2>
          <div className="brands-grid">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="brand-card"
                onClick={() => navigate(brand.path)}
                style={{ '--brand-color': brand.color }}
              >
                <h3 className="brand-name">{brand.name}</h3>

                <div className="card-divider"></div>

                <div className="brand-stats">
                  <div className="brand-stat-item">
                    <span className="brand-stat-value">{matrixProducts.length}</span>
                    <span className="brand-stat-label">termék</span>
                  </div>
                  <div className="brand-stat-item">
                    <span className="brand-stat-value">{totalProducts}</span>
                    <span className="brand-stat-label">db készlet</span>
                  </div>
                </div>

                <button className="view-brand-btn">
                  Termékek megtekintése →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InventoryBrands;
