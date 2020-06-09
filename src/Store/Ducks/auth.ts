const Actions = {
  SET_USER: 'auth/SET_USER',
  REMOVE_USER: 'auth/REMOVE_USER',
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

type ActionType = ReturnType<typeof setUser>;

const reducer = (state = initialState, action: ActionType): Auth => {
  switch (action.type) {
    case Actions.SET_USER:
      return action.payload;
    case Actions.REMOVE_USER:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
