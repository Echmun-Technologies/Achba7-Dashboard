import { IObservationProfile, IUserProfile } from "@/interfaces";
import { AdminState } from "./state";
import { getStoreAccessors } from "typesafe-vuex";
import { State } from "../state";

export const mutations = {
  setUsers(state: AdminState, payload: IUserProfile[]) {
    state.users = payload;
  },
  setUser(state: AdminState, payload: IUserProfile) {
    const users = state.users.filter((user: IUserProfile) => user.id !== payload.id);
    users.push(payload);
    state.users = users;
  },
  setObservations(state: AdminState, payload: IObservationProfile[]) {
    state.observations = payload;
  },
  setObservation(state: AdminState, payload: IObservationProfile) {
    const observations = state.observations.filter((observation: IObservationProfile) => observation.description !== payload.description);
    observations.push(payload);
    state.observations = observations;
  },
};

const { commit } = getStoreAccessors<AdminState, State>("");

export const commitSetUser = commit(mutations.setUser);
export const commitSetUsers = commit(mutations.setUsers);
export const commitSetObservation = commit(mutations.setObservations);