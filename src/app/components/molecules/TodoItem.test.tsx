import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { Todo } from '../../types/tods';
import TodoItem from './TodoItem';

afterEach(cleanup);

it('TodoItem コンポーネントが描画されていること', () => {
  const todo: Todo = {
    id: '1',
    text: 'text',
    completed: true,
    createdAt: Date.now(),
  };
  render(<TodoItem item={todo} />);
  expect(TodoItem).toBeTruthy();
});
