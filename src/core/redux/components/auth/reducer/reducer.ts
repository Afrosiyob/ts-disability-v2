import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INPUT_AUTH_STATE } from "core/interfaces/interfaces";

const initialState: INPUT_AUTH_STATE = {
  isLoading: false,
  isReady: false,
  data: null,
  error: null,
};

const { actions, reducer } = createSlice({
  name: "AUTH",
  initialState,
  reducers: {
    authLogin: (state, { payload: _payload }: PayloadAction<object>) => ({
      ...state,
      isLoading: true,
    }),
    authLoginSuccess: (state, { payload }: PayloadAction<object>) => ({
      ...state,
      isLoading: false,
      isReady: true,
      data: payload,
    }),
    authLoginError: (state, { payload }: PayloadAction<string>) => ({
      ...state,
      isLoading: false,
      isReady: false,
      error: payload,
    }),
  },
});

export const { authLogin, authLoginSuccess, authLoginError } = actions;
export const authReducer = reducer;
