import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import visiteditemsReducer from './features/visited';
import cartReducer from './features/cart';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const combreducers = combineReducers({
  visiteditems: visiteditemsReducer,
  cart: cartReducer
});

const reducer = persistReducer(persistConfig, combreducers);

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

setupListeners(store.dispatch);
