export interface IUserProfile {
  email: string;
  is_active: boolean;
  is_superuser: boolean;
  full_name: string;
  id: number;
}

export interface IUserProfileUpdate {
  email?: string;
  full_name?: string;
  password?: string;
  is_active?: boolean;
  is_superuser?: boolean;
}

export interface IUserProfileCreate {
  email: string;
  full_name?: string;
  password?: string;
  is_active?: boolean;
  is_superuser?: boolean;
}
export interface IObservation {
  description: string;
  observation_type: string;
  date: string;
  id: number;
}

export interface IObservationUpdate {
  description?: string;
  observation_type?: string;
  date?: string;
}

export interface IObservationCreate {
  description: string;
  observation_type?: string;
  date?: string;
}
