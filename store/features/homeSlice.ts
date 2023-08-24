import { createSlice } from '@reduxjs/toolkit';


type items = {
  title: string;
  slug: string;
  image: string;
  body: string;
  excerpt: string;
  cat: string;
}

type load = {
  payload: items[];
};

type initState = {
  about: items[];
  services: items[];
};

const initialState: initState = {
  about: [],
  services: [],
};

export const homeSlice = createSlice({
  name: 'homeslice',
  initialState,
  reducers: {
    getAllPosts: (state, { payload }: load) => {
      const arr = payload || [];
      const about = Object.values(arr).filter(
        (v) => v?.cat?.toLowerCase() === 'about'
      );

      const services = Object.values(arr).filter(
        (v) => v?.cat?.toLowerCase() === 'service'
      );

      state.about = about;
      state.services = services
    },
  },
});

export const { getAllPosts } = homeSlice.actions;
export default homeSlice.reducer;
