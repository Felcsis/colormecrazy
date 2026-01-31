import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMoneyBillWave,
  faArrowUp,
  faArrowDown,
  faChartLine,
  faPlus,
  faTimes,
  faCalendar,
  faFilter
} from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../context/AuthContext';
import { api } from '../../services/api';
import './Finance.css';

function Finance() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showIncomeModal, setShowIncomeModal] = useState(false);
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [filterPeriod, setFilterPeriod] = useState('month'); // day, week, month, all

  // New income form
  const [newIncome, setNewIncome] = useState({
    date: new Date().toISOString().split('T')[0],
    amount: '',
    type: 'service',
    paymentMethod: 'cash',
    description: ''
  });

  // New expense form
  const [newExpense, setNewExpense] = useState({
    date: new Date().toISOString().split('T')[0],
    amount: '',
    category: 'products',
    description: ''
  });

  // Load data from API
  useEffect(() => {
    async function loadFinanceData() {
      try {
        const [incomesData, expensesData] = await Promise.all([
          api.getIncomes(filterPeriod),
          api.getExpenses(filterPeriod)
        ]);
        setIncomes(incomesData.incomes);
        setExpenses(expensesData.expenses);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load finance data:', error);
        setLoading(false);
      }
    }

    loadFinanceData();
  }, [filterPeriod]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Filter data by period
  const filteredData = useMemo(() => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const weekAgo = new Date(today);
    weekAgo.setDate(weekAgo.getDate() - 7);
    const monthAgo = new Date(today);
    monthAgo.setMonth(monthAgo.getMonth() - 1);

    const filterByDate = (item) => {
      const itemDate = new Date(item.date);
      if (filterPeriod === 'day') return itemDate >= today;
      if (filterPeriod === 'week') return itemDate >= weekAgo;
      if (filterPeriod === 'month') return itemDate >= monthAgo;
      return true;
    };

    return {
      incomes: incomes.filter(filterByDate),
      expenses: expenses.filter(filterByDate)
    };
  }, [incomes, expenses, filterPeriod]);

  // Calculate statistics
  const stats = useMemo(() => {
    const totalIncome = filteredData.incomes.reduce((sum, i) => sum + parseFloat(i.amount), 0);
    const totalExpense = filteredData.expenses.reduce((sum, e) => sum + parseFloat(e.amount), 0);
    const profit = totalIncome - totalExpense;

    const cashIncome = filteredData.incomes
      .filter(i => i.paymentMethod === 'cash')
      .reduce((sum, i) => sum + parseFloat(i.amount), 0);

    const cardIncome = filteredData.incomes
      .filter(i => i.paymentMethod === 'card')
      .reduce((sum, i) => sum + parseFloat(i.amount), 0);

    return {
      totalIncome,
      totalExpense,
      profit,
      cashIncome,
      cardIncome
    };
  }, [filteredData]);

  // Add income
  const handleAddIncome = async (e) => {
    e.preventDefault();
    if (!newIncome.amount || parseFloat(newIncome.amount) <= 0) {
      alert('Kérlek adj meg érvényes összeget!');
      return;
    }

    try {
      const incomeData = {
        date: newIncome.date,
        amount: parseFloat(newIncome.amount),
        type: newIncome.type,
        paymentMethod: newIncome.paymentMethod
      };

      const { income } = await api.createIncome(incomeData);
      setIncomes([income, ...incomes]);
      setNewIncome({
        date: new Date().toISOString().split('T')[0],
        amount: '',
        type: 'service',
        paymentMethod: 'cash',
        description: ''
      });
      setShowIncomeModal(false);
    } catch (error) {
      alert('Hiba a bevétel mentésekor: ' + error.message);
    }
  };

  // Add expense
  const handleAddExpense = async (e) => {
    e.preventDefault();
    if (!newExpense.amount || parseFloat(newExpense.amount) <= 0) {
      alert('Kérlek adj meg érvényes összeget!');
      return;
    }

    try {
      const expenseData = {
        date: newExpense.date,
        amount: parseFloat(newExpense.amount),
        category: newExpense.category
      };

      const { expense } = await api.createExpense(expenseData);
      setExpenses([expense, ...expenses]);
      setNewExpense({
        date: new Date().toISOString().split('T')[0],
        amount: '',
        category: 'products',
        description: ''
      });
      setShowExpenseModal(false);
    } catch (error) {
      alert('Hiba a kiadás mentésekor: ' + error.message);
    }
  };

  // Delete income/expense
  const deleteIncome = async (id) => {
    if (window.confirm('Biztosan törlöd ezt a bevételt?')) {
      try {
        await api.deleteIncome(id);
        setIncomes(incomes.filter(i => i.id !== id));
      } catch (error) {
        alert('Hiba a törléskor: ' + error.message);
      }
    }
  };

  const deleteExpense = async (id) => {
    if (window.confirm('Biztosan törlöd ezt a kiadást?')) {
      try {
        await api.deleteExpense(id);
        setExpenses(expenses.filter(e => e.id !== id));
      } catch (error) {
        alert('Hiba a törléskor: ' + error.message);
      }
    }
  };

  return (
    <div className="finance-container">
      <div className="finance-content">
        {/* Header */}
        <div className="finance-header">
          <div>
            <h1>Pénzügy</h1>
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

        {/* Period Filter */}
        <div className="period-filters">
          <button
            className={`period-btn ${filterPeriod === 'day' ? 'active' : ''}`}
            onClick={() => setFilterPeriod('day')}
          >
            Ma
          </button>
          <button
            className={`period-btn ${filterPeriod === 'week' ? 'active' : ''}`}
            onClick={() => setFilterPeriod('week')}
          >
            7 nap
          </button>
          <button
            className={`period-btn ${filterPeriod === 'month' ? 'active' : ''}`}
            onClick={() => setFilterPeriod('month')}
          >
            30 nap
          </button>
          <button
            className={`period-btn ${filterPeriod === 'all' ? 'active' : ''}`}
            onClick={() => setFilterPeriod('all')}
          >
            Összes
          </button>
        </div>

        {/* Statistics Cards */}
        <div className="finance-stats">
          <div className="stat-card income-card">
            <div className="stat-icon">
              <FontAwesomeIcon icon={faArrowUp} />
            </div>
            <div className="stat-info">
              <div className="stat-label">Bevétel</div>
              <div className="stat-value">{stats.totalIncome.toLocaleString()} Ft</div>
              <div className="stat-breakdown">
                Készpénz: {stats.cashIncome.toLocaleString()} Ft • Kártya: {stats.cardIncome.toLocaleString()} Ft
              </div>
            </div>
          </div>

          <div className="stat-card expense-card">
            <div className="stat-icon">
              <FontAwesomeIcon icon={faArrowDown} />
            </div>
            <div className="stat-info">
              <div className="stat-label">Kiadás</div>
              <div className="stat-value">{stats.totalExpense.toLocaleString()} Ft</div>
            </div>
          </div>

          <div className={`stat-card profit-card ${stats.profit >= 0 ? 'positive' : 'negative'}`}>
            <div className="stat-icon">
              <FontAwesomeIcon icon={faChartLine} />
            </div>
            <div className="stat-info">
              <div className="stat-label">Profit</div>
              <div className="stat-value">{stats.profit.toLocaleString()} Ft</div>
            </div>
          </div>
        </div>

        {/* Income & Expense Tables */}
        <div className="finance-tables">
          {/* Incomes */}
          <div className="finance-section">
            <div className="section-header">
              <h2>Bevételek ({filteredData.incomes.length})</h2>
              <button className="add-btn" onClick={() => setShowIncomeModal(true)}>
                <FontAwesomeIcon icon={faPlus} /> Új bevétel
              </button>
            </div>
            <div className="transactions-list">
              {filteredData.incomes.length === 0 ? (
                <p className="no-data">Még nincs bevétel.</p>
              ) : (
                filteredData.incomes.map(income => (
                  <div key={income.id} className="transaction-item income-item">
                    <div className="transaction-date">
                      <FontAwesomeIcon icon={faCalendar} />
                      {new Date(income.date).toLocaleDateString('hu-HU')}
                    </div>
                    <div className="transaction-details">
                      <div className="transaction-type">
                        {income.type === 'service' && 'Szolgáltatás'}
                        {income.type === 'product' && 'Termékeladás'}
                        {income.type === 'other' && 'Egyéb'}
                      </div>
                      <div className="transaction-payment">
                        {income.paymentMethod === 'cash' ? 'Készpénz' : 'Kártya'}
                      </div>
                      {income.description && (
                        <div className="transaction-description">{income.description}</div>
                      )}
                    </div>
                    <div className="transaction-amount income-amount">
                      +{income.amount.toLocaleString()} Ft
                    </div>
                    <button className="delete-btn" onClick={() => deleteIncome(income.id)}>
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Expenses */}
          <div className="finance-section">
            <div className="section-header">
              <h2>Kiadások ({filteredData.expenses.length})</h2>
              <button className="add-btn" onClick={() => setShowExpenseModal(true)}>
                <FontAwesomeIcon icon={faPlus} /> Új kiadás
              </button>
            </div>
            <div className="transactions-list">
              {filteredData.expenses.length === 0 ? (
                <p className="no-data">Még nincs kiadás.</p>
              ) : (
                filteredData.expenses.map(expense => (
                  <div key={expense.id} className="transaction-item expense-item">
                    <div className="transaction-date">
                      <FontAwesomeIcon icon={faCalendar} />
                      {new Date(expense.date).toLocaleDateString('hu-HU')}
                    </div>
                    <div className="transaction-details">
                      <div className="transaction-type">
                        {expense.category === 'products' && 'Termékbeszerzés'}
                        {expense.category === 'utilities' && 'Rezsi'}
                        {expense.category === 'rent' && 'Bérleti díj'}
                        {expense.category === 'other' && 'Egyéb'}
                      </div>
                      {expense.description && (
                        <div className="transaction-description">{expense.description}</div>
                      )}
                    </div>
                    <div className="transaction-amount expense-amount">
                      -{expense.amount.toLocaleString()} Ft
                    </div>
                    <button className="delete-btn" onClick={() => deleteExpense(expense.id)}>
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Income Modal */}
        {showIncomeModal && (
          <div className="modal-overlay" onClick={() => setShowIncomeModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>Új bevétel hozzáadása</h3>
                <button className="close-btn" onClick={() => setShowIncomeModal(false)}>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
              <form onSubmit={handleAddIncome}>
                <div className="form-group">
                  <label>Dátum</label>
                  <input
                    type="date"
                    value={newIncome.date}
                    onChange={(e) => setNewIncome({ ...newIncome, date: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Összeg (Ft)</label>
                  <input
                    type="number"
                    value={newIncome.amount}
                    onChange={(e) => setNewIncome({ ...newIncome, amount: e.target.value })}
                    placeholder="15000"
                    min="0"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Típus</label>
                  <select
                    value={newIncome.type}
                    onChange={(e) => setNewIncome({ ...newIncome, type: e.target.value })}
                  >
                    <option value="service">Szolgáltatás</option>
                    <option value="product">Termékeladás</option>
                    <option value="other">Egyéb</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Fizetési mód</label>
                  <select
                    value={newIncome.paymentMethod}
                    onChange={(e) => setNewIncome({ ...newIncome, paymentMethod: e.target.value })}
                  >
                    <option value="cash">Készpénz</option>
                    <option value="card">Kártya</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Megjegyzés (opcionális)</label>
                  <input
                    type="text"
                    value={newIncome.description}
                    onChange={(e) => setNewIncome({ ...newIncome, description: e.target.value })}
                    placeholder="pl. Hajfestés + vágás"
                  />
                </div>
                <div className="modal-actions">
                  <button type="button" className="cancel-btn" onClick={() => setShowIncomeModal(false)}>
                    Mégse
                  </button>
                  <button type="submit" className="submit-btn">
                    Hozzáadás
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Expense Modal */}
        {showExpenseModal && (
          <div className="modal-overlay" onClick={() => setShowExpenseModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>Új kiadás hozzáadása</h3>
                <button className="close-btn" onClick={() => setShowExpenseModal(false)}>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
              <form onSubmit={handleAddExpense}>
                <div className="form-group">
                  <label>Dátum</label>
                  <input
                    type="date"
                    value={newExpense.date}
                    onChange={(e) => setNewExpense({ ...newExpense, date: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Összeg (Ft)</label>
                  <input
                    type="number"
                    value={newExpense.amount}
                    onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
                    placeholder="25000"
                    min="0"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Kategória</label>
                  <select
                    value={newExpense.category}
                    onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })}
                  >
                    <option value="products">Termékbeszerzés</option>
                    <option value="utilities">Rezsi</option>
                    <option value="rent">Bérleti díj</option>
                    <option value="other">Egyéb</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Megjegyzés (opcionális)</label>
                  <input
                    type="text"
                    value={newExpense.description}
                    onChange={(e) => setNewExpense({ ...newExpense, description: e.target.value })}
                    placeholder="pl. Matrix termékek"
                  />
                </div>
                <div className="modal-actions">
                  <button type="button" className="cancel-btn" onClick={() => setShowExpenseModal(false)}>
                    Mégse
                  </button>
                  <button type="submit" className="submit-btn">
                    Hozzáadás
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Finance;
