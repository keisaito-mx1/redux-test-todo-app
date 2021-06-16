import {
  createEntityAdapter,
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
  PayloadAction,
} from '@reduxjs/toolkit';
import { Todo } from '../../types/tods';
import { AppState } from '../App/AppState';
import { getAllTodos } from './ApiActions';
import { ApiTodoActionName } from './ApiState';

export const todosAdapter = createEntityAdapter<Todo>({
  selectId: (todo) => todo.id,
});

export const ApiSlice = createSlice({
  name: ApiTodoActionName,
  initialState: todosAdapter.getInitialState<AppState>({ isLoading: false }),
  reducers: {
    addTodo: todosAdapter.addOne,
    deleteTodo: todosAdapter.removeOne,
    deleteCompleted: (
      state,
      action: PayloadAction<{ deleteTodos: Todo[] }>
    ) => {
      const deleteIds = action.payload.deleteTodos
        .filter((todo) => todo.completed)
        .map((todo) => todo.id);
      todosAdapter.removeMany(state, deleteIds);
    },
    updateTodo: (state, action: PayloadAction<{ todo: Todo }>) => {
      todosAdapter.updateOne(state, {
        id: action.payload.todo.id,
        changes: action.payload.todo,
      });
    },
    setTodos: todosAdapter.setAll,
  },
  extraReducers: (builder) => {
    builder.addMatcher(isPending(getAllTodos), (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(isFulfilled(getAllTodos), (state, action) => {
      state.isLoading = false;
      todosAdapter.setAll(state, action.payload.todos);
    });
    builder.addMatcher(isRejected(getAllTodos), (state) => {
      state.isLoading = false;
    });
  },
});
