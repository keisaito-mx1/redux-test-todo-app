import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, logout } from "../../firebase/auth";
import { ApiAuthActionName } from "./ApiAuthState";

type User = {
  id: string;
  email: string;
};

type LoginFulFilledActionPayloadType = {
  user: User;
};

export const loginAction = createAsyncThunk<
  LoginFulFilledActionPayloadType,
  void
>(`${ApiAuthActionName}/login`, async () => {
  const result = await login().then((res) => res.user);
  localStorage.setItem("userToken", result.uid);
  return {
    user: {
      id: result.uid,
      email: result.email || "",
    },
  };
});

export const logoutAction = createAsyncThunk<void, void>(
  `${ApiAuthActionName}/login`,
  async () => {
    await logout();
    localStorage.removeItem("userToken");
  }
);
