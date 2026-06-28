const API_BASE_URL = 'http://127.0.0.1:5000';
 

class ApiClient {
  private getAuthHeaders() {
    const token = localStorage.getItem('token');
    return {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    };
  }

  async request(endpoint: string, options: RequestInit = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      headers: this.getAuthHeaders(),
      ...options,
    };

    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Something went wrong');
    }

    return data;
  }

  // Auth methods
  async login(email: string, password: string) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async register(name: string, email: string, password: string) {
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    });
  }

  // Items methods
  async getItems() {
    return this.request('/items');
  }

  async createItem(item: any) {
    return this.request('/items', {
      method: 'POST',
      body: JSON.stringify(item),
    });
  }

  async getMyItems() {
    return this.request('/items/my-items');
  }

  // Drop points methods
  async getDropPoints() {
    return this.request('/drop-points');
  }

  // Volunteers methods
  async getVolunteers() {
    return this.request('/volunteers');
  }

  async registerVolunteer(volunteer: any) {
    return this.request('/volunteers/register', {
      method: 'POST',
      body: JSON.stringify(volunteer),
    });
  }

  // Contact methods
  async submitContact(contact: any) {
    return this.request('/contact', {
      method: 'POST',
      body: JSON.stringify(contact),
    });
  }
}

export const api = new ApiClient();