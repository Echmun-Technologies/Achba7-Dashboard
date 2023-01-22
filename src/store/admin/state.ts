import { IAnimal, IUserProfile } from "@/interfaces";

export interface AdminState {
  users: IUserProfile[];
  animals: IAnimal[];
}
