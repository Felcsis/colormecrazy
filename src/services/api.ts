const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

class ApiClient {
  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${API_URL}${endpoint}`;

    const response = await fetch(url, {
      ...options,
      credentials: 'include', // Send cookies
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Unknown error' }));
      throw new Error(error.error || `HTTP ${response.status}`);
    }

    return response.json();
  }

  // Auth endpoints
  async login(username: string, password: string) {
    return this.request<{ success: boolean; user: any }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });
  }

  async logout() {
    return this.request<{ success: boolean }>('/auth/logout', {
      method: 'POST',
    });
  }

  async getCurrentUser() {
    return this.request<{ user: any }>('/auth/me');
  }

  // Schedules endpoints
  async getSchedules(date?: string) {
    const query = date ? `?date=${date}` : '';
    return this.request<{ schedules: Record<string, any[]> }>(`/schedules${query}`);
  }

  async saveSchedule(date: string, shift: string, userId: number, action: 'add' | 'remove') {
    return this.request<{ success: boolean }>('/schedules', {
      method: 'POST',
      body: JSON.stringify({ date, shift, userId, action }),
    });
  }

  // Bookings endpoints
  async getBookings(studentId?: number, date?: string) {
    const params = new URLSearchParams();
    if (studentId) params.append('studentId', studentId.toString());
    if (date) params.append('date', date);
    const query = params.toString() ? `?${params}` : '';
    return this.request<{ bookings: any[] }>(`/bookings${query}`);
  }

  async createBooking(booking: {
    studentId: number;
    modelName: string;
    date: string;
    time: string;
    service: string;
    notes?: string;
  }) {
    return this.request<{ success: boolean; booking: any }>('/bookings', {
      method: 'POST',
      body: JSON.stringify(booking),
    });
  }

  async updateBooking(id: string, updates: any) {
    return this.request<{ success: boolean; booking: any }>(`/bookings/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  }

  async deleteBooking(id: string) {
    return this.request<{ success: boolean }>(`/bookings/${id}`, {
      method: 'DELETE',
    });
  }

  // Inventory endpoints
  async getProducts(brand?: string) {
    const query = brand ? `?brand=${brand}` : '';
    return this.request<{ products: any[] }>(`/inventory/products${query}`);
  }

  async getProduct(id: number) {
    return this.request<{ product: any }>(`/inventory/products/${id}`);
  }

  async updateProductQuantity(id: number, quantity: number) {
    return this.request<{ success: boolean; product: any }>(`/inventory/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ quantity }),
    });
  }

  async updateShadeQuantity(id: number, quantity: number) {
    return this.request<{ success: boolean; shade: any }>(`/inventory/shades/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ quantity }),
    });
  }

  // Finance endpoints
  async getIncomes(period: string = 'month') {
    return this.request<{ incomes: any[] }>(`/finance/incomes?period=${period}`);
  }

  async createIncome(income: {
    date: string;
    amount: number;
    type: string;
    paymentMethod: string;
  }) {
    return this.request<{ success: boolean; income: any }>('/finance/incomes', {
      method: 'POST',
      body: JSON.stringify(income),
    });
  }

  async deleteIncome(id: number) {
    return this.request<{ success: boolean }>(`/finance/incomes/${id}`, {
      method: 'DELETE',
    });
  }

  async getExpenses(period: string = 'month') {
    return this.request<{ expenses: any[] }>(`/finance/expenses?period=${period}`);
  }

  async createExpense(expense: {
    date: string;
    amount: number;
    category: string;
  }) {
    return this.request<{ success: boolean; expense: any }>('/finance/expenses', {
      method: 'POST',
      body: JSON.stringify(expense),
    });
  }

  async deleteExpense(id: number) {
    return this.request<{ success: boolean }>(`/finance/expenses/${id}`, {
      method: 'DELETE',
    });
  }
}

export const api = new ApiClient();
