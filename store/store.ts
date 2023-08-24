import { configureStore, combineReducers } from '@reduxjs/toolkit';
import homeSliceReducer from './features/homeSlice';
import { fetchData } from './features/fetchQuerySlice';
import contactSliceReducer from './features/contactSlice';
import productsSliceReducer from './features/productsSlice';

const reducers = combineReducers({
  home: homeSliceReducer,
  contact: contactSliceReducer,
  product: productsSliceReducer,
  [fetchData.reducerPath]: fetchData.reducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(fetchData.middleware),
});

export default store;
