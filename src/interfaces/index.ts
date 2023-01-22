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
