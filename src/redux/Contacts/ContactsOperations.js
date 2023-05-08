import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async contact => {
    const contacts = await axios.post('/contacts', contact);
    return contacts;
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const contacts = await axios.post('/contacts', contact);
    return contacts;
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    await axios.delete(`/contacts/contacts/${id}`);
    return id;
  }
);
