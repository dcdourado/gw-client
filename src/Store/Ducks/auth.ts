const Actions = {
  SET_USER: 'auth/SET_USER',
  REMOVE_USER: 'auth/REMOVE_USER',
  SET_SCORE: 'auth/SET_SCORE',
};

interface Auth {
  id: number;
  username: string;
  mmr: number;
  token: string;
}

const initialState: Auth = {
  id: -1,
  username: '',
  mmr: 0,
  token: '',
};

export const setUser = ({ id, username, mmr, token }: Auth) => ({
  type: Actions.SET_USER,
  payload: { id, username, mmr, token },
});

export const removeUser = () => ({
  type: Actions.REMOVE_USER,
});

export const setScore = (score: number) => ({
  type: Actions.SET_SCORE,
  payload: { mmr: score },
});

type ActionType = ReturnType<typeof setUser>;

const reducer = (state = initialState, action: ActionType): Auth => {
  switch (action.type) {
    case Actions.SET_USER:
      return action.payload;
    case Actions.REMOVE_USER:
      return initialState;
    case Actions.SET_SCORE:
      return { ...state, mmr: action.payload.mmr };
    default:
      return state;
  }
};

export default reducer;
