export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export interface Reservation {
  id: string;
  userId: string;
  location: string;
  date: string;
  time: string;
  partySize: number;
  notes: string;
}

export interface ReservationForm {
  location: string;
  date: string;
  time: string;
  partySize: number;
  notes: string;
}
