import axios, { AxiosInstance } from 'axios';

import { store } from '../Store';
import { setUser } from '../Store/Ducks/auth';
import { AuthUser } from '../Utils/Interfaces';

const baseURL = 'http://localhost:3333';

class Api {
  private static instance: Api;
  private axiosInstance: AxiosInstance;

  private constructor() {
    this.axiosInstance = axios.create({
      baseURL,
    });
  }

  static getInstance() {
    this.instance = this.instance || new Api();
    return this.instance;
  }

  doAuth(username: string, password: string) {
    return this.axiosInstance.post('/auth', { username, password }).then((value) => {
      const authUser: AuthUser = value.data;
      store.dispatch(setUser(authUser));
    });
  }

  findUserById(id: number) {
    this.useToken();
    return this.axiosInstance.get(`/users/${id}`);
  }

  createUser(username: string, password: string) {
    return this.axiosInstance.post('/users', { username, password });
  }

  private useToken() {
    const { token } = store.getState().auth;
    this.axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  createLobby() {
    this.useToken();
    return this.axiosInstance.post('/lobbies');
  }

  leaveLobby(id: number) {
    this.useToken();
    return this.axiosInstance.put(`/lobbies/${id}/leave`);
  }

  deleteLobby(id: number) {
    this.useToken();
    return this.axiosInstance.delete(`/lobbies/${id}`);
  }

  findLobbies() {
    this.useToken();
    return this.axiosInstance.get('/lobbies');
  }

  findLobby(id: number) {
    this.useToken();
    return this.axiosInstance.get(`/lobbies/${id}`);
  }

  joinLobby(id: number) {
    this.useToken();
    return this.axiosInstance.put(`/lobbies/${id}/join`);
  }
}

export default Api;
