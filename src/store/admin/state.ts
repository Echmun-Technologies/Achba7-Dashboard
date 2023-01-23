import { IAnimal, IUserProfile } from "@/interfaces";

export interface AdminState {
  users: IUserProfile[];
  animals: IAnimal[];
import { IObservation, IUserProfile } from "@/interfaces";

export interface AdminState {
  users: IUserProfile[];
  observations: IObservation[];
}
