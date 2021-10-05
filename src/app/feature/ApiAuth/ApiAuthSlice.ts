import { createSlice, isFulfilled, isPending } from "@reduxjs/toolkit";

import { loginAction, logoutAction } from "./ApiAuthActions";
import { ApiAuthActionName, ApiAuthInitialState } from "./ApiAuthState";

const ApiAuthSlice = createSlice({
  name: ApiAuthActionName,
  initialState: ApiAuthInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(isPending(loginAction), (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(isFulfilled(loginAction), (state, action) => {
      state.isLoading = false;
      state.userId = action.payload.user.id;
    });
    builder.addMatcher(isFulfilled(logoutAction), (state) => {
      state.isLoading = false;
      state.userId = "";
    });
  },
});

export default ApiAuthSlice;
