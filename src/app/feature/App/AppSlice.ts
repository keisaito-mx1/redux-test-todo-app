import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppActionName, AppInitialState, AppState } from './AppState';

export const AppSlice = createSlice({
  name: AppActionName,
  initialState: AppInitialState,
  reducers: {
    setLoading: (
      state: AppState,
      action: PayloadAction<{ isLoading: boolean }>
    ) => {
      state.isLoading = action.payload.isLoading;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addMatcher(App.pending, (state, action) => {
  //     console.log('Running', state, action);
  //   });
  //   builder.addMatcher(App.fulfilled, (state, action) => {
  //     console.log('Completed', state, action);
  //   });
  //   builder.addMatcher(App.rejected, (state, action) => {
  //     console.log('Error', state, action);
  //   });
  // },
});

export const { setLoading } = AppSlice.actions;
