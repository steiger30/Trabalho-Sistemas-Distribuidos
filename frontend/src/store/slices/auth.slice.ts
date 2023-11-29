import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AuthSliceInitialState {
  json: any;
  accessToken: string | null;
  accessTokenExpires: string | null;
  userEmail: string | null;
  id: string | null;
}

export interface LoginActionPayload {
  accessToken: string;
  expiringDate: string;
  email: string;
  id: string;
}
export const initialState: AuthSliceInitialState = {
  accessToken: null,
  accessTokenExpires: null,
  userEmail: null,
  id: null,
  json: undefined
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginActionPayload>) => {
      state.accessToken = action.payload.accessToken;
      state.accessTokenExpires = action.payload.expiringDate;
      state.userEmail = action.payload.email;
      state.id = action.payload.id;
    },
    logOut: (state) => {
      state.accessToken = null;
      state.accessTokenExpires = null;
      state.userEmail = null;
      state.id = null;
    },
  },
});

export const { logOut, login } = authSlice.actions;

export default authSlice.reducer;
