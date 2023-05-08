import { createSlice } from '@reduxjs/toolkit';
import { signUp, signIn, logOut, getUser } from './AuthOperations';
export const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isFetchingCurrentUser: false,
    error: null,
  },
  extraReducers: {
    [signUp.pending]: (state, action) => {
      state.isFetchingCurrentUser = true;
    },
    [signUp.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
      state.error = null;
    },
    [signUp.rejected]: (state, action) => {
      state.isFetchingCurrentUser = false;
      state.error = action.payload;
    },
    [signIn.pending]: (state, action) => {
      state.isFetchingCurrentUser = true;
    },
    [signIn.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
      state.error = null;
    },
    [signIn.rejected]: (state, action) => {
      state.isFetchingCurrentUser = false;
      state.error = action.payload;
    },
    [logOut.pending]: (state, action) => {
      state.isFetchingCurrentUser = true;
    },
    [logOut.fulfilled]: (state, action) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isFetchingCurrentUser = false;
      state.error = null;
    },
    [logOut.rejected]: (state, action) => {
      state.isFetchingCurrentUser = false;
      state.error = action.payload;
    },
    [getUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
      state.error = null;
    },

  },
});
