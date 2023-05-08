import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const api = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
  transformResponse: [
    data => {
      const parsedData = JSON.parse(data);
      delete parsedData.headers;
      return parsedData;
    },
  ],
});

const token = {
  set(token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    api.defaults.headers.common.Authorization = '';
  },
};

export const signUp = createAsyncThunk(
  'auth/signup',
  async (userInfo, { rejectWithValue }) => {
    try {
      const { data } = await api.post('/users/signup', userInfo);
      const tokenID = data.token;
      token.set(tokenID);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const signIn = createAsyncThunk(
  'auth/signin',
  async (userInfo, { rejectWithValue }) => {
    try {
      const { data } = await api.post('/users/login', userInfo);
      const tokenID = data.token;
      token.set(tokenID);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await api.post('/users/logout');
      token.unset();
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
