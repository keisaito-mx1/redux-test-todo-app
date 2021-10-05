import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
  PayloadAction,
} from "@reduxjs/toolkit";
import { TodoEntitiy } from "../../types/tods";
import {
  deleteTodoAction,
  deleteTodosAction,
  getTodosAction,
  postTodoAction,
  updateTodoAction,
} from "./ApiTodoActions";
import {
  ApiTodoActionName,
  ApiTodoInitialState,
  todosAdapter,
} from "./ApiTodoState";

const ApiTodoSlice = createSlice({
  name: ApiTodoActionName,
  initialState: ApiTodoInitialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ todo: TodoEntitiy }>) => {
      todosAdapter.addOne(state.todos, action.payload.todo);
    },
    deleteTodo: (state, action: PayloadAction<{ id: TodoEntitiy["id"] }>) => {
      todosAdapter.removeOne(state.todos, action.payload.id);
    },
    updateTodo: (state, action: PayloadAction<{ todo: TodoEntitiy }>) => {
      todosAdapter.updateOne(state.todos, {
        id: action.payload.todo.id,
        changes: action.payload.todo,
      });
    },
    setTodos: (state, action: PayloadAction<{ todos: TodoEntitiy[] }>) => {
      todosAdapter.setAll(state.todos, action.payload.todos);
    },
    clearEntity: (state) => {
      todosAdapter.setAll(state.todos, []);
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(isPending(getTodosAction), (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(isPending(postTodoAction), (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(isPending(deleteTodoAction), (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(isPending(updateTodoAction), (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(isFulfilled(getTodosAction), (state, action) => {
      state.isLoading = false;
      console.log(action.payload.todos);
      todosAdapter.setAll(state.todos, action.payload.todos);
    });
    builder.addMatcher(isFulfilled(postTodoAction), (state, action) => {
      state.isLoading = false;
      todosAdapter.addOne(state.todos, action.payload.todo);
    });
    builder.addMatcher(isFulfilled(updateTodoAction), (state, action) => {
      state.isLoading = false;
      todosAdapter.updateOne(state.todos, {
        id: action.payload.todo.id,
        changes: action.payload.todo,
      });
    });
    builder.addMatcher(isFulfilled(deleteTodoAction), (state) => {
      state.isLoading = false;
    });
    builder.addMatcher(isFulfilled(deleteTodosAction), (state, action) => {
      state.isLoading = false;
      todosAdapter.removeMany(state.todos, action.payload.ids);
    });
    builder.addMatcher(isRejected(updateTodoAction), (state) => {
      state.isLoading = false;
    });
    builder.addMatcher(isRejected(getTodosAction), (state) => {
      state.isLoading = false;
    });
  },
});

export default ApiTodoSlice;
