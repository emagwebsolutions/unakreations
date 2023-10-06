import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: {},
};

const cart = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    getcart: (state, { payload }) => {
      state.posts = { ...state.posts, [payload.title]: payload };
    },
    deletecart: (state, { payload }) => {
      state.posts = payload
    },
  },
});

export default cart.reducer;

//Use it in dispatch
export const { getcart,deletecart } = cart.actions;

// use it in useSelector
export const cartList = (state: any) => state.cart.posts;
