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
export interface IObservation {
  description: string;
  observation_type: string;
  photo: string;
  date: string;
  coordinates: {
    lat: 0;
    lng: 0;
  };
  id: number;
}

export interface IObservationUpdate {
  description?: string;
  observation_type?: string;
  photo?: string;
  date?: string;
  coordinates?: {
    lat: 0;
    lng: 0;
  };
}

export interface IObservationCreate {
  lng: number;
  lat: number;
  description: string;
  observation_type?: string;
  photo?: string;
  date?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
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
}
