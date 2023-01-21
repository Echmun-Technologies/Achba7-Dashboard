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
export interface IAnimalProfile {
  name: string;
  type: string;
  photo: string;
}

export interface IAnimalProfileUpdate {
  name?: string;
  type?: string;
  photo?: string;
}

export interface IAnimalProfileCreate {
  name: string;
  type?: string;
  photo?: string;
}
