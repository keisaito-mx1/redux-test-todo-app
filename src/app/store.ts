import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import ApiAuthSlice from "./feature/ApiAuth/ApiAuthSlice";
import ApiTodoSlice from "./feature/ApiTodo/ApiTodoSlice";
import { AppSlice } from "./feature/App/AppSlice";

const reducer = {
  ApiAuth: ApiAuthSlice.reducer,
  ApiTodo: ApiTodoSlice.reducer,
  App: AppSlice.reducer,
};

export const store = configureStore({ reducer });

export const getInitialStore = () => configureStore({ reducer });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
