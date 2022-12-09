import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    loading: false,
    error: false,
  },
  reducers: {
    authStart: (state) => {
      return { ...state, loading: true, error: false };
    },
    authSuccess: (state, action) => {
      localStorage.setItem("token", JSON.stringify(action.payload));
      return {
        ...state,
        token: action.payload.token,
        loading: false,
        error: false,
      };
    },
    authFail: (state) => {
      return { ...state, loading: false, error: true };
    },
  },
});

export default authSlice.reducer;

export const { authStart, authSuccess, authFail } = authSlice.actions;
