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
  adminAnimals: (state: AdminState) => state.animals,
  adminOneAnimal: (state: AdminState) => (observationId: number) => {
    const filteredAnimals = state.animals.filter(
      (animal) => animal.id === observationId,
    );
    if (filteredAnimals.length > 0) {
      return { ...filteredAnimals[0] };
    }
  },
};

const { read } = getStoreAccessors<AdminState, State>("");

export const readAdminOneUser = read(getters.adminOneUser);
export const readAdminUsers = read(getters.adminUsers);
export const readAdminOneAnimal = read(getters.adminOneAnimal);
export const readAdminAnimals = read(getters.adminAnimals);
