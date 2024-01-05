import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: {},
  total: {
    amnt: 0,
  },
  items: {},
  singlebuy: false,
};

const cart = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    getcart: (state, { payload }) => {
      state.posts = { ...state.posts, [payload.title]: payload };
    },
    getsinglecart: (state, { payload }) => {
      state.posts = { [payload.title]: payload };
    },
    deletecart: (state, { payload }) => {
      state.posts = payload;
    },
    singlebuyer: (state) => {
      state.singlebuy = true;
    },
    total: (state, { payload }) => {
      if (state.singlebuy) {
        state.total = { ...payload };
        console.log('Single buy purchase')
      } else {
        state.total = { ...state.total, ...payload };
        console.log('multiple buy purchase')
      }
    },
    updatetotal: (state, { payload }) => {
      state.total = { ...payload };
    },
    items: (state, { payload }) => {
      state.items = { ...state.items, ...payload };
    },
  },
});




export default cart.reducer;

//Use it in dispatch
export const { getcart, getsinglecart, deletecart, total, items, updatetotal, singlebuyer } =
  cart.actions;

// use it in useSelector
export const cartList = (state: any) => state.cart.posts;

export const getTotal = (state: any) => state.cart.total;
export const getItems = (state: any) => state.cart.items;
