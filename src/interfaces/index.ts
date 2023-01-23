export interface IUserProfile {
  email: string;
  is_active: boolean;
  is_superuser: boolean;
  first_name: string;
  last_name: string;
  id: number;
}

export interface IUserProfileUpdate {
  email?: string;
  first_name?: string;
  last_name?: string;
  password?: string;
  is_active?: boolean;
  is_superuser?: boolean;
}

export interface IUserProfileCreate {
  email: string;
  first_name?: string;
  last_name?: string;
  password?: string;
  is_active?: boolean;
  is_superuser?: boolean;
}
export interface IAnimal {
  id: number;
  name: string;
  type: string;
  photo: string;
}

export interface IAnimalUpdate {
  name?: string;
  type?: string;
  photo?: string;
}

export interface IAnimalCreate {
  name: string;
  type?: string;
  photo?: string;
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
