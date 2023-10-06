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
  },
});

export default cart.reducer;

//Use it in dispatch
export const { getcart } = cart.actions;

// use it in useSelector
export const cartList = (state: any) => state.cart.posts;
