import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks";
import { logoutAction } from "./ApiAuthActions";
import ApiAuthSelector from "./ApiAuthSelector";
import { ApiAuthState } from "./ApiAuthState";

export const useLogin = (): [ApiAuthState, VoidFunction] => {
  const dispatch = useAppDispatch();
  const state = useSelector(ApiAuthSelector);
  const operator = useCallback(() => {
    dispatch(logoutAction());
  }, [dispatch]);
  return [state, operator];
};
