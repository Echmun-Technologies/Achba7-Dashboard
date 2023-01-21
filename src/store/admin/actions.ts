import { api } from "@/api";
import { ActionContext } from "vuex";
import {
  IAnimalProfileCreate,
  IAnimalProfileUpdate,
  IUserProfileCreate,
  IUserProfileUpdate,
} from "@/interfaces";
import { State } from "../state";
import { AdminState } from "./state";
import { getStoreAccessors } from "typesafe-vuex";
import { commitSetUsers, commitSetUser } from "./mutations";
import { dispatchCheckApiError } from "../main/actions";
import { commitAddNotification, commitRemoveNotification } from "../main/mutations";

type MainContext = ActionContext<AdminState, State>;

export const actions = {
  async actionGetUsers(context: MainContext) {
    try {
      const response = await api.getUsers(context.rootState.main.token);
      if (response) {
        commitSetUsers(context, response.data);
      }
    } catch (error) {
      await dispatchCheckApiError(context, error);
    }
  },
  async actionUpdateUser(
    context: MainContext,
    payload: { id: number; user: IUserProfileUpdate },
  ) {
    try {
      const loadingNotification = { content: "saving", showProgress: true };
      commitAddNotification(context, loadingNotification);
      const response = (
        await Promise.all([
          api.updateUser(context.rootState.main.token, payload.id, payload.user),
          await new Promise<void>((resolve, _) => setTimeout(() => resolve(), 500)),
        ])
      )[0];
      commitSetUser(context, response.data);
      commitRemoveNotification(context, loadingNotification);
      commitAddNotification(context, {
        content: "User successfully updated",
        color: "success",
      });
    } catch (error) {
      await dispatchCheckApiError(context, error);
    }
  },
  async actionCreateUser(context: MainContext, payload: IUserProfileCreate) {
    try {
      const loadingNotification = { content: "saving", showProgress: true };
      commitAddNotification(context, loadingNotification);
      const response = (
        await Promise.all([
          api.createUser(context.rootState.main.token, payload),
          await new Promise<void>((resolve, _) => setTimeout(() => resolve(), 500)),
        ])
      )[0];
      commitSetUser(context, response.data);
      commitRemoveNotification(context, loadingNotification);
      commitAddNotification(context, {
        content: "User successfully created",
        color: "success",
      });
    } catch (error) {
      await dispatchCheckApiError(context, error);
    }
  },
};
//async actionGetAnimals(context: MainContext) {
//try {
//const response = await api.getAnimals(context.rootState.main.token);
//if (response) {
//commitSetAnimals(context, response.data);
//}
//} catch (error) {
//await dispatchCheckApiError(context, error);
//}
//},
//async actionUpdateAnimal(
//context: MainContext,
//payload: { name: string; animal: IAnimalProfileUpdate },
//) {
//try {
//const loadingNotification = { content: "saving", showProgress: true };
//commitAddNotification(context, loadingNotification);
//const response = (
//await Promise.all([
//api.updateAnimal(context.rootState.main.token, payload.name, payload.animal),
//await new Promise<void>((resolve, _) => setTimeout(() => resolve(), 500)),
//])
//)[0];
//commitSetAnimals(context, response.data);
//commitRemoveNotification(context, loadingNotification);
//commitAddNotification(context, {
//content: "Animal successfully updated",
//color: "success",
//});
//} catch (error) {
//await dispatchCheckApiError(context, error);
//}
//},
//async actionCreateAnimal(context: MainContext, payload: IAnimalProfileCreate) {
//try {
//const loadingNotification = { content: "saving", showProgress: true };
//commitAddNotification(context, loadingNotification);
//const response = (
//await Promise.all([
//api.createAnimal(context.rootState.main.token, payload),
//await new Promise<void>((resolve, _) => setTimeout(() => resolve(), 500)),
//])
// )[0];
//commitSetAnimals(context, response.data);
//commitRemoveNotification(context, loadingNotification);
//commitAddNotification(context, {
//content: "Animal successfully created",
//color: "success",
//});
//} catch (error) {
//await dispatchCheckApiError(context, error);
//}
//},
//};

const { dispatch } = getStoreAccessors<AdminState, State>("");

export const dispatchCreateUser = dispatch(actions.actionCreateUser);
export const dispatchGetUsers = dispatch(actions.actionGetUsers);
export const dispatchUpdateUser = dispatch(actions.actionUpdateUser);
//export const dispatchCreateAnimal = dispatch(actions.actionCreateAnimal);
//export const dispatchGetAnimals = dispatch(actions.actionGetAnimals);
//export const dispatchUpdateAniaml = dispatch(actions.actionUpdateAnimal);
//function commitSetAnimals(context: MainContext, data: any) {
//throw new Error("Function not implemented.");
//}
