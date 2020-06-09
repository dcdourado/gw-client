import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './Ducks/auth';

const rootReducer = combineReducers({
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const persistConfig = {
  storage,
  key: 'gw',
  whitelist: ['auth'],
};

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer as any);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
