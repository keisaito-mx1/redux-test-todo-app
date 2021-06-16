import { EntityState } from '@reduxjs/toolkit';
import { Todo } from '../../types/tods';
import { AppState } from '../App/AppState';
import { ApiSlice, todosAdapter } from './ApiSlice';
import { ApiTodoState } from './ApiState';

it('addTodo', () => {
  const initialState = todosAdapter.getInitialState<ApiTodoState>({
    isLoading: false,
  });
  const todo: Todo = {
    id: '1',
    completed: false,
    text: 'text',
    createdAt: Date.now(),
  };
  const actual = ApiSlice.reducer(initialState, ApiSlice.actions.addTodo(todo));
  const exp: EntityState<Todo> & AppState = {
    entities: {
      '1': todo,
    },
    ids: ['1'],
    isLoading: false,
  };
  expect(actual).toStrictEqual(exp);
});
it('updateTodo', () => {
  const initialTodo: Todo = {
    id: '1',
    completed: false,
    text: 'targetText',
    createdAt: Date.now(),
  };
  const initialState: EntityState<Todo> & AppState = {
    ids: [initialTodo.id],
    entities: { '1': initialTodo },
    isLoading: false,
  };

  const payLoadTodo: Todo = {
    id: '1',
    text: 'updated',
    completed: true,
    createdAt: Date.now(),
  };

  const actual = ApiSlice.reducer(
    initialState,
    ApiSlice.actions.updateTodo({ todo: payLoadTodo })
  );

  const exp: EntityState<Todo> & AppState = {
    entities: {
      '1': payLoadTodo,
    },
    ids: ['1'],
    isLoading: false,
  };
  expect(actual).toStrictEqual(exp);
});

it('deleteTodo', () => {
  const initialTodo: Todo = {
    id: 'targetId',
    completed: false,
    text: 'targetText',
    createdAt: Date.now(),
  };
  const initialState: EntityState<Todo> & AppState = {
    ids: [initialTodo.id],
    entities: { targetId: initialTodo },
    isLoading: false,
  };

  const actual = ApiSlice.reducer(
    initialState,
    ApiSlice.actions.deleteTodo('targetId')
  );

  const exp: EntityState<Todo> & AppState = {
    ids: [],
    entities: {},
    isLoading: false,
  };

  expect(actual).toStrictEqual(exp);
});
