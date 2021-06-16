import { act, cleanup, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { isInvalid, LoginFormValues } from '../pages';
import AppForm from './AppForm';

afterEach(cleanup);

it('エラーメッセージが描画されていること', () => {
  const Component = () => {
    const methods = useForm<LoginFormValues>();
    return (
      <FormProvider {...methods}>
        <AppForm
          errorText="エラーメッセージ"
          onSubmit={jest.fn()}
          onError={jest.fn()}
        />
      </FormProvider>
    );
  };

  const { getByText, container } = render(<Component />);
  const actual = getByText('エラーメッセージ');
  expect(actual).toBeTruthy();
  expect(container.querySelector('.css-x0qxpi')).toBeTruthy();
});

it('エラーメッセージが描画されていないこと', () => {
  const Component = () => {
    const methods = useForm<LoginFormValues>();
    return (
      <FormProvider {...methods}>
        <AppForm errorText="" onSubmit={jest.fn()} onError={jest.fn()} />
      </FormProvider>
    );
  };

  const { container } = render(<Component />);
  const actual = container.querySelector('.css-x0qxpi');

  expect(actual).toBeNull();
});

it('入力フォームの情報をsubmitできること', async () => {
  let actual: LoginFormValues;
  const onSubmit: SubmitHandler<LoginFormValues> = (e) => (actual = e);
  const Component = () => {
    const methods = useForm<LoginFormValues>();
    const errorText = isInvalid(methods.formState.errors)
      ? 'エラーメッセージ'
      : '';
    return (
      <FormProvider {...methods}>
        <AppForm
          errorText={errorText}
          onSubmit={onSubmit}
          onError={jest.fn()}
        />
      </FormProvider>
    );
  };

  const { getByText, queryByText, getByPlaceholderText } = render(
    <Component />
  );
  const exp: LoginFormValues = {
    id: 'spxbz',
    password: 'MeLLadmin',
  };
  act(() => {
    userEvent.type(getByPlaceholderText('ID'), exp.id);
    userEvent.type(getByPlaceholderText('Password'), exp.password);
    userEvent.click(getByText('ログイン'));
  });
  // handleSubmit is Async Function

  await waitFor(() => {
    expect(actual).toStrictEqual(exp);
    expect(queryByText(/エラーメッセージ/)).toBeNull();
  });
});

it('ID未入力の時Submitされないこと。', async () => {
  const mockError = jest.fn();

  const Component = () => {
    const methods = useForm<LoginFormValues>();
    const errorText = isInvalid(methods.formState.errors)
      ? 'エラーメッセージ'
      : '';
    return (
      <FormProvider {...methods}>
        <AppForm
          errorText={errorText}
          onSubmit={jest.fn()}
          onError={mockError}
        />
      </FormProvider>
    );
  };

  const { getByText, getByPlaceholderText } = render(<Component />);
  const exp: LoginFormValues = {
    id: 'spxbz',
    password: 'MeLLadmin',
  };
  act(() => {
    // userEvent.type(getByPlaceholderText('ID'), '');
    userEvent.type(getByPlaceholderText('Password'), exp.password);
    userEvent.click(getByText('ログイン'));
  });
  // handleSubmit is Async Function
  await waitFor(() => {
    expect(mockError).toBeCalled();
    expect(getByText(/エラーメッセージ/)).toBeTruthy();
  });
});
