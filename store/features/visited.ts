import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  posts: {},
};

const visiteditems = createSlice({
  initialState,
  name: 'visiteditems',
  reducers: {
    getVisiteditems: (state, { payload }) => {
      state.posts = { ...state.posts, [payload._id]: payload };
    },
  },
});

export default visiteditems.reducer;

//Use it in dispatch
export const { getVisiteditems } = visiteditems.actions;

// use it in useSelector
export const visiteditemsList = (state: any) => state.visiteditems.posts;
