import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { ApiSlice } from './feature/Api/ApiSlice';
import { AppSlice } from './feature/App/AppSlice';

export const store = configureStore({
  reducer: {
    Api: ApiSlice.reducer,
    App: AppSlice.reducer,
  },
});

export const getInitialStore = () =>
  configureStore({
    reducer: { Api: ApiSlice.reducer, App: AppSlice.reducer },
  });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
