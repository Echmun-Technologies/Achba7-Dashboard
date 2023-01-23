import { AdminState } from "./state";
import { getStoreAccessors } from "typesafe-vuex";
import { State } from "../state";

export const getters = {
  adminUsers: (state: AdminState) => state.users,
  adminOneUser: (state: AdminState) => (userId: number) => {
    const filteredUsers = state.users.filter((user) => user.id === userId);
    if (filteredUsers.length > 0) {
      return { ...filteredUsers[0] };
    }
  },
  adminObservations: (state: AdminState) => state.observations,
  adminOneObservation: (state: AdminState) => (observationId: number) => {
    const filteredObservations = state.observations.filter(
      (observation) => observation.id === observationId,
    );
    if (filteredObservations.length > 0) {
      return { ...filteredObservations[0] };
    }
  },
};

const { read } = getStoreAccessors<AdminState, State>("");

export const readAdminOneUser = read(getters.adminOneUser);
export const readAdminUsers = read(getters.adminUsers);
export const readAdminOneObservation = read(getters.adminOneObservation);
export const readAdminObservations = read(getters.adminObservations);
