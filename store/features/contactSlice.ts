import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contactdetails: {},
};

export const contacts = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    contactdetails: (state, { payload }) => {
      state.contactdetails = payload;
    },
  },
});

export const {contactdetails} = contacts.actions 
export default contacts.reducer
