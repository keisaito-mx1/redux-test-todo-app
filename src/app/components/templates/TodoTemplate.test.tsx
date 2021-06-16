import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Provider } from 'react-redux';
import { store } from '../../store';
import TodoTemplate from './TodoTemplate';

afterEach(cleanup);
it('TodoTemplate コンポーネントが描画されていること。', () => {
  const Component: React.FC = () => {
    const methods = useForm();
    return (
      <Provider store={store}>
        <FormProvider {...methods}>
          <TodoTemplate />
        </FormProvider>
      </Provider>
    );
  };
  render(<Component />);
  expect(TodoTemplate).toBeTruthy();
});
