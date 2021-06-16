import { configureStore } from '@reduxjs/toolkit';
import { act, cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { LoginFormValues } from '.';
import { ApiSlice } from '../../feature/Api/ApiSlice';
import { AppSlice } from '../../feature/App/AppSlice';
import AppPage from './AppPage';

afterEach(cleanup);

it('AppPage コンポーネントが描画されていること。', () => {
  const store = initializeStore();
  render(
    <Provider store={store}>
      <AppPage />
    </Provider>
  );
  expect(AppPage).toBeTruthy();
});

/**
 * ID/PASSを入力してログインボタンを押下する
 * @param input
 * @param assert
 */

const exe = async (input: LoginFormValues, assert: VoidFunction) => {
  act(() => {
    if (input.id) {
      userEvent.type(screen.getByPlaceholderText('ID'), input.id);
    }
    if (input.password) {
      userEvent.type(screen.getByPlaceholderText('Password'), input.password);
    }
    userEvent.click(screen.getByText('ログイン'));
  });

  await waitFor(() => {
    assert();
  });
};

it('successページに遷移すること。', async () => {
  const history = createMemoryHistory();
  const store = initializeStore();
  render(
    <Provider store={store}>
      <Router history={history}>
        <AppPage />
      </Router>
    </Provider>
  );

  await exe({ id: 'spxbz', password: 'MeLLadmin' }, () =>
    expect(history.location.pathname).toBe('/success')
  );
});
it('ID未入力時にエラーメッセージが表示されること。', async () => {
  const history = createMemoryHistory();
  const store = initializeStore();
  render(
    <Provider store={store}>
      <Router history={history}>
        <AppPage />
      </Router>
    </Provider>
  );

  await exe({ id: '', password: 'MeLLadmin' }, () =>
    expect(screen.getByText(/IDもしくはパスワードが違います。/)).toBeTruthy()
  );
});

const errorTextAssert = () => {
  expect(screen.getByText(/IDもしくはパスワードが違います。/)).toBeTruthy();
};

const initializeStore = () =>
  configureStore({
    reducer: { Api: ApiSlice.reducer, App: AppSlice.reducer },
  });
it('Password未入力時にエラーメッセージが表示されること。', async () => {
  const history = createMemoryHistory();
  const store = initializeStore();
  render(
    <Provider store={store}>
      <Router history={history}>
        <AppPage />
      </Router>
    </Provider>
  );
  await exe({ id: 'spxbz', password: '' }, errorTextAssert);
});

it('id/password未入力時にエラーメッセージが表示されること。', async () => {
  const history = createMemoryHistory();
  const store = initializeStore();
  render(
    <Provider store={store}>
      <Router history={history}>
        <AppPage />
      </Router>
    </Provider>
  );

  await exe({ id: '', password: '' }, errorTextAssert);
});
