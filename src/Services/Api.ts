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

  postAuth(username: string, password: string) {
    this.axiosInstance.post('/auth', { username, password }).then((value) => {
      const authUser: AuthUser = value.data;
      store.dispatch(setUser(authUser));
    });
  }

  private useToken() {
    const { token } = store.getState().auth;
    this.axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  getLobbies() {
    this.useToken();
    return this.axiosInstance.get('/lobbies');
  }

  getLobby(id: number) {
    this.useToken();
    return this.axiosInstance.get(`/lobbies/${id}`);
  }
}

export default Api;
