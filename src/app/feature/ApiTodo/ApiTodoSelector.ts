import { RootState } from "../../store";
import { todosAdapter } from "./ApiTodoState";

const ApiTodoSelector = (state: RootState) => state.ApiTodo;

export const ApiTodoEntitiySelector = todosAdapter.getSelectors<RootState>(
  (state) => state.ApiTodo.todos
);

export default ApiTodoSelector;
