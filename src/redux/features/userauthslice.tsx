// authSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  userEmail: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  userEmail: ''
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true;
      state.userEmail = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userEmail = '';
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
