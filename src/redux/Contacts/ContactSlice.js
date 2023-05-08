import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './ContactsOperations';
export const ContactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    [addContact.fulfilled]: (state, action) => {
      state.items = [...state.items, action.payload];
    },
  },
});
