import { createSlice } from '@reduxjs/toolkit';

type items = {
  title: string;
  slug: string;
  image: string;
  body: string;
  excerpt: string;
  cat: string;
};

type load = {
  payload: items[];
};

const initialState: {
  products: items[];
} = {
  products: [],
};

export const products = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getAllProducts: (state, { payload }: load) => {
      const arr = payload || [];
      const prod = Object.values(arr).filter(
        (v) => v?.cat?.toLowerCase() === 'products'
      );
      state.products = prod;
    },
  },
});

export const { getAllProducts } = products.actions;
export default products.reducer;
