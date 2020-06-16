const Actions = {
  JOIN: 'lobby/JOIN',
  LEAVE: 'lobby/LEAVE',
  PLAY: 'lobby/PLAY',
};

interface Lobby {
  id: number;
  playing: boolean;
}

const initialState: Lobby = {
  id: -1,
  playing: false,
};

export const joinLobby = (id: number) => ({
  type: Actions.JOIN,
  payload: { id },
});

export const leaveLobby = () => ({
  type: Actions.LEAVE,
});

export const playLobby = () => ({
  type: Actions.PLAY,
});

type ActionType = ReturnType<typeof joinLobby>;

const reducer = (state = initialState, action: ActionType): Lobby => {
  switch (action.type) {
    case Actions.JOIN:
      return { ...action.payload, playing: false };
    case Actions.PLAY:
      return { ...state, playing: true };
    case Actions.LEAVE:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
