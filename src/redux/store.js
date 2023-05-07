import { configureStore } from '@reduxjs/toolkit';
import { Filter } from './FilterSlice';
import { ContactSlice } from './ContactSlice';

export const store = configureStore({
  reducer: {
    contacts: ContactSlice.reducer,
    filter: Filter.reducer,
  },
});
