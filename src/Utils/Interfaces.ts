export interface User {
  id: number;
  username: string;
  mmr: number;
}

export interface AuthUser extends User {
  token: string;
}

export interface LobbyIndex {
  id: number;
  leaderId: number;
  status: number;
  size: number;
}

export interface Lobby extends LobbyIndex {
  players: User[];
}
