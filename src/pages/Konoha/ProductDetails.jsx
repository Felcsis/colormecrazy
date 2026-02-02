import React, { useState, useEffect, useMemo, useCallback, memo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit,
  faSave,
  faTimes,
  faExclamationTriangle,
  faSearch,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../context/AuthContext';
import './ProductDetails.css';

// Import database
import databaseData from '../../data/database.json';

// Memoized table row component
const ShadeRow = memo(({
  shade,
  isLowStock,
  isEditing,
  editValue,
  editMinStock,
  onEditValueChange,
  onEditMinStockChange,
  onKeyPress,
  onStartEdit,
  onSave,
  onCancel
}) => (
  <tr className={isLowStock ? 'low-stock-row' : ''}>
    <td className="shade-code">{shade.code}</td>
    <td className="shade-name">{shade.name}</td>
    <td className="shade-quantity">
      {isEditing ? (
        <input
          type="number"
          value={editValue}
          onChange={onEditValueChange}
          onKeyDown={onKeyPress}
          className="quantity-input"
          autoFocus
          min="0"
        />
      ) : (
        <span className="quantity-display">{shade.quantity}</span>
      )}
    </td>
    <td className="shade-min">
      {isEditing ? (
        <input
          type="number"
          value={editMinStock}
          onChange={onEditMinStockChange}
          onKeyDown={onKeyPress}
          className="quantity-input"
          min="0"
        />
      ) : (
        <span className="quantity-display">{shade.minStock}</span>
      )}
    </td>
    <td className="shade-status">
      {isLowStock ? (
        <span className="status-badge low">
          <FontAwesomeIcon icon={faExclamationTriangle} /> Alacsony
        </span>
      ) : (
        <span className="status-badge ok">OK</span>
      )}
    </td>
    <td className="shade-actions">
      {isEditing ? (
        <>
          <button className="action-btn save-btn" onClick={onSave} title="Mentés">
            <FontAwesomeIcon icon={faSave} />
          </button>
          <button className="action-btn cancel-btn" onClick={onCancel} title="Mégse">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </>
      ) : (
        <button className="action-btn edit-btn" onClick={onStartEdit} title="Szerkesztés">
          <FontAwesomeIcon icon={faEdit} />
        </button>
      )}
    </td>
  </tr>
));

ShadeRow.displayName = 'ShadeRow';

function ProductDetails() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [shades, setShades] = useState([]);
  const [editingShade, setEditingShade] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [editMinStock, setEditMinStock] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const saveTimerRef = React.useRef(null);

  // Debounce search term
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 400);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    // Load product details
    const productData = databaseData.inventory.products.find(p => p.id === parseInt(productId));
    if (productData && productData.hasShades) {
      setProduct(productData);

      // Load shades from localStorage or database - use requestIdleCallback for better performance
      const loadShades = () => {
        const savedShades = localStorage.getItem(`product-${productId}-shades`);
        if (savedShades) {
          try {
            setShades(JSON.parse(savedShades));
          } catch (e) {
            setShades(productData.shades);
          }
        } else {
          setShades(productData.shades);
        }
      };

      if (window.requestIdleCallback) {
        window.requestIdleCallback(loadShades);
      } else {
        setTimeout(loadShades, 0);
      }
    }

    // Cleanup timer on unmount
    return () => {
      if (saveTimerRef.current) {
        clearTimeout(saveTimerRef.current);
      }
    };
  }, [productId]);

  const handleLogout = useCallback(() => {
    logout();
    navigate('/login');
  }, [logout, navigate]);

  const startEditing = useCallback((shadeCode, currentQuantity, currentMinStock) => {
    setEditingShade(shadeCode);
    setEditValue(currentQuantity.toString());
    setEditMinStock(currentMinStock.toString());
  }, []);

  const cancelEditing = useCallback(() => {
    setEditingShade(null);
    setEditValue('');
    setEditMinStock('');
  }, []);

  const saveQuantity = useCallback((shadeCode) => {
    const newQuantity = parseInt(editValue);
    const newMinStock = parseInt(editMinStock);

    if (isNaN(newQuantity) || newQuantity < 0) {
      alert('Kérlek érvényes mennyiséget adj meg!');
      return;
    }

    if (isNaN(newMinStock) || newMinStock < 0) {
      alert('Kérlek érvényes min. készletet adj meg!');
      return;
    }

    setShades(prevShades => {
      const updatedShades = prevShades.map(shade =>
        shade.code === shadeCode
          ? { ...shade, quantity: newQuantity, minStock: newMinStock }
          : shade
      );

      // Throttle localStorage save
      if (saveTimerRef.current) {
        clearTimeout(saveTimerRef.current);
      }
      saveTimerRef.current = setTimeout(() => {
        try {
          localStorage.setItem(`product-${productId}-shades`, JSON.stringify(updatedShades));
        } catch (e) {
          console.error('Failed to save to localStorage:', e);
        }
      }, 500);

      return updatedShades;
    });

    setEditingShade(null);
    setEditValue('');
    setEditMinStock('');
  }, [editValue, editMinStock, productId]);

  const handleKeyPress = useCallback((e, shadeCode) => {
    if (e.key === 'Enter') {
      saveQuantity(shadeCode);
    } else if (e.key === 'Escape') {
      cancelEditing();
    }
  }, [saveQuantity, cancelEditing]);

  // Filter shades based on search - memoized with debounce
  const filteredShades = useMemo(() => {
    if (!debouncedSearchTerm) return shades;
    const term = debouncedSearchTerm.toLowerCase();
    return shades.filter(shade =>
      shade.code.toLowerCase().includes(term) ||
      shade.name.toLowerCase().includes(term)
    );
  }, [shades, debouncedSearchTerm]);

  // Pagination - memoized
  const { totalPages, paginatedShades } = useMemo(() => {
    const total = Math.ceil(filteredShades.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginated = filteredShades.slice(startIndex, endIndex);
    return { totalPages: total, paginatedShades: paginated };
  }, [filteredShades, currentPage, itemsPerPage]);

  // Reset to page 1 when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearchTerm]);

  // Stats - memoized
  const { totalQuantity, lowStockShades } = useMemo(() => {
    const total = shades.reduce((sum, shade) => sum + shade.quantity, 0);
    const lowStock = shades.filter(shade => shade.quantity <= shade.minStock);
    return { totalQuantity: total, lowStockShades: lowStock };
  }, [shades]);

  if (!product) {
    return (
      <div className="product-details-container">
        <div className="product-details-content">
          <p>Termék nem található.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="product-details-container">
      <div className="product-details-content">
        {/* Header */}
        <div className="product-details-header">
          <div>
            <h1>{product.name}</h1>
            <p className="welcome-text">
              <strong>{product.brand}</strong> • {product.subcategory}
            </p>
          </div>
          <div className="header-actions">
            <button onClick={() => navigate('/konoha/keszlet/matrix')} className="back-btn">
              ← Matrix Termékek
            </button>
            <button onClick={handleLogout} className="logout-btn">
              Kijelentkezés
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="product-stats-row">
          <div className="product-stat-card">
            <div className="stat-value">{totalQuantity}</div>
            <div className="stat-label">Összes darab</div>
          </div>
          <div className="product-stat-card">
            <div className="stat-value">{shades.length}</div>
            <div className="stat-label">Árnyalatok száma</div>
          </div>
          <div className="product-stat-card">
            <div className="stat-value">{product.pricePerUnit.toLocaleString()} Ft</div>
            <div className="stat-label">Ár / darab</div>
          </div>
        </div>

        {/* Shades Table */}
        <div className="shades-table-wrapper">
          <div className="table-header">
            <h2 className="table-title">Színárnyalatok ({filteredShades.length})</h2>
            <div className="search-box-small">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <input
                type="text"
                placeholder="Keresés kód vagy név szerint..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <table className="shades-table">
            <thead>
              <tr>
                <th>Kód</th>
                <th>Név</th>
                <th>Készlet (db)</th>
                <th>Min. készlet</th>
                <th>Státusz</th>
                <th>Műveletek</th>
              </tr>
            </thead>
            <tbody>
              {paginatedShades.map((shade) => {
                const isLowStock = shade.quantity <= shade.minStock;
                const isEditing = editingShade === shade.code;

                return (
                  <ShadeRow
                    key={shade.code}
                    shade={shade}
                    isLowStock={isLowStock}
                    isEditing={isEditing}
                    editValue={editValue}
                    editMinStock={editMinStock}
                    onEditValueChange={(e) => setEditValue(e.target.value)}
                    onEditMinStockChange={(e) => setEditMinStock(e.target.value)}
                    onKeyPress={(e) => handleKeyPress(e, shade.code)}
                    onStartEdit={() => startEditing(shade.code, shade.quantity, shade.minStock)}
                    onSave={() => saveQuantity(shade.code)}
                    onCancel={cancelEditing}
                  />
                );
              })}
            </tbody>
          </table>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pagination">
              <button
                className="pagination-btn"
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
              >
                <FontAwesomeIcon icon={faChevronLeft} /> Előző
              </button>
              <span className="pagination-info">
                {currentPage} / {totalPages} oldal ({filteredShades.length} árnyalat)
              </span>
              <button
                className="pagination-btn"
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
              >
                Következő <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
