import { IAnimal, IUserProfile } from "@/interfaces";
import { IObservation, IUserProfile } from "@/interfaces";
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
  setAnimals(state: AdminState, payload: IAnimal[]) {
    state.animals = payload;
  },
  setAnimal(state: AdminState, payload: IAnimal) {
    const animals = state.animals.filter((animal: IAnimal) => animal.id !== payload.id);
    animals.push(payload);
    state.animals = animals;
  setObservations(state: AdminState, payload: IObservation[]) {
    state.observations = payload;
  },
  setObservation(state: AdminState, payload: IObservation) {
    const observations = state.observations.filter(
      (observation: IObservation) => observation.id !== payload.id,
    );
    observations.push(payload);
    state.observations = observations;
  },
};

const { commit } = getStoreAccessors<AdminState, State>("");

export const commitSetUser = commit(mutations.setUser);
export const commitSetUsers = commit(mutations.setUsers);
export const commitSetAnimal = commit(mutations.setAnimal);
export const commitSetAnimals = commit(mutations.setAnimals);
export const commitSetObservation = commit(mutations.setObservations);