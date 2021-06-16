import { createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import { Todo } from '../../types/tods';
import { AppActionName } from '../App/AppState';

type AddTodoFulFilledActionType = {
  todos: Todo[];
};

type RejectedActionPayloadType = {
  errorCode: string;
};

export const getAllTodos = createAsyncThunk<
  AddTodoFulFilledActionType,
  void,
  { rejectValue: RejectedActionPayloadType }
>(`${AppActionName}/add`, async () => {
  await new Promise((r) => setTimeout(r, 500));
  // Call Api
  const todo: Omit<Todo, 'id'> = {
    completed: false,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    createdAt: Date.now(),
  };

  return {
    todos: new Array(10).fill(todo).map((todo) => ({ ...todo, id: nanoid() })),
  };
});
