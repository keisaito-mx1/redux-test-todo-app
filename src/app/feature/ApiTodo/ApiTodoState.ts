import { createEntityAdapter } from "@reduxjs/toolkit";
import { TodoEntitiy } from "../../types/tods";

export const ApiTodoActionName = `ApiTodo`;

export const todosAdapter = createEntityAdapter<TodoEntitiy>({
  selectId: (todo) => todo.id,
});

export type TodoEntitiyState = ReturnType<typeof todosAdapter.getInitialState>;

export const TodoEntitiyStateInitialState: TodoEntitiyState =
  todosAdapter.getInitialState();

export type ApiTodoState = {
  isLoading: boolean;
  todos: TodoEntitiyState;
};

export const ApiTodoInitialState: ApiTodoState = {
  isLoading: true,
  todos: TodoEntitiyStateInitialState,
};
