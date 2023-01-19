import { IObservationProfile, IUserProfile } from "@/interfaces";

export interface AdminState {
  users: IUserProfile[];
  observations: IObservationProfile[];
}
