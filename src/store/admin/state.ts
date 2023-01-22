import { IObservation, IUserProfile } from "@/interfaces";

export interface AdminState {
  users: IUserProfile[];
  observations: IObservation[];
}
