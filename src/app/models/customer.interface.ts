export interface Customer {
  id?: number;
  username: string;
  password?: string;
  customerName: string;
  dateOfBirth: string;
  gender: 'M' | 'F';
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}
