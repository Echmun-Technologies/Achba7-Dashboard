/* eslint-disable */
import axios from "axios";
import { apiUrl } from "@/env";
import {
  IUserProfile,
  IUserProfileUpdate,
  IUserProfileCreate,
  IObservation,
  IObservationUpdate,
  IObservationCreate,
  IAnimal,
  IAnimalCreate,
  IAnimalUpdate
} from "./interfaces";

function authHeaders(token: string) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

export const api = {
  async logInGetToken(username: string, password: string) {
    const params = new URLSearchParams();
    params.append("username", username);
    params.append("password", password);

    return axios.post(`${apiUrl}/api/v1/login/access-token`, params);
  },
  async getMe(token: string) {
    return axios.get<IUserProfile>(`${apiUrl}/api/v1/users/me`, authHeaders(token));
  },
  async updateMe(token: string, data: IUserProfileUpdate) {
    return axios.put<IUserProfile>(
      `${apiUrl}/api/v1/users/me`,
      data,
      authHeaders(token),
    );
  },
  async getUsers(token: string) {
    return axios.get<IUserProfile[]>(`${apiUrl}/api/v1/users/`, authHeaders(token));
  },
  async updateUser(token: string, userId: number, data: IUserProfileUpdate) {
    return axios.put(`${apiUrl}/api/v1/users/${userId}`, data, authHeaders(token));
  },
  async createUser(token: string, data: IUserProfileCreate) {
    return axios.post(`${apiUrl}/api/v1/users/`, data, authHeaders(token));
  },
  async getObservations(token: string) {
    //return axios.get<IObservation[]>("/Observation.json");

    return axios.get<IObservation[]>(
    `${apiUrl}/api/v1/observations/`,
    authHeaders(token),
    );
  },
  async updateObservation(
    token: string,
    description: string,
    data: IObservationUpdate,
  ) {
    return axios.put(
      `${apiUrl}/api/v1/observations/${description}`,
      data,
      authHeaders(token),
    );
  },
  async createObservation(token: string, data: IObservationCreate) {
    return axios.post(`${apiUrl}/api/v1/observations/`, data, authHeaders(token));
  },
  async passwordRecovery(email: string) {
    return axios.post(`${apiUrl}/api/v1/password-recovery/${email}`);
  },
  async resetPassword(password: string, token: string) {
    return axios.post(`${apiUrl}/api/v1/reset-password/`, {
      new_password: password,
      token,
    });
  },
  async getAnimals(_token: string) {
    /*return axios.get<IAnimal[]>(
    `${apiUrl}/api/v1/animals/`,
    authHeaders(_token),
    );*/
    return axios.get<IAnimal[]>("/Animal.json");
  },
  async updateAnimal(token: string, id: number, data: IAnimalUpdate) {
    return axios.put(`${apiUrl}/api/v1/animals/${id}`, data, authHeaders(token));
  },
  async createAnimal(token: string, data: IAnimalCreate) {
    return axios.post(`${apiUrl}/api/v1/animals/`, data, authHeaders(token));},
};
