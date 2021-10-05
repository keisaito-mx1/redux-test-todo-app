import { createAsyncThunk } from "@reduxjs/toolkit";
import { Todo, TodoEntitiy } from "../../types/tods";
import { TodoService } from "../Services/todo.service";
import { ApiTodoActionName } from "./ApiTodoState";

type PostTodoFulfilledType = {
  todo: TodoEntitiy;
};

export type PostTodoArgsType = {
  todo: Todo;
};

type RejectedActionPayloadType = {
  errorCode: string;
};

const todoService = new TodoService();

export const postTodoAction = createAsyncThunk<
  PostTodoFulfilledType,
  PostTodoArgsType,
  { rejectValue: RejectedActionPayloadType }
>(`${ApiTodoActionName}/post`, async ({ todo }) => {
  const todoService = new TodoService();

  const post = await todoService.postTodo(todo);

  return { todo: post };
});

export type GetTodoFulfilledType = {
  todos: TodoEntitiy[];
};

export const getTodosAction = createAsyncThunk<GetTodoFulfilledType, void>(
  `${ApiTodoActionName}/get`,
  async () => {
    const todos: TodoEntitiy[] = await todoService.getAll();
    return { todos };
  }
);

type UpdateTodoArgsType = {
  todo: TodoEntitiy;
};
type UpdateTodoFulfilledType = PostTodoFulfilledType;

export const updateTodoAction = createAsyncThunk<
  UpdateTodoFulfilledType,
  UpdateTodoArgsType
>(`${ApiTodoActionName}/update`, async ({ todo }) => {
  console.log(todo);
  const updated = await todoService.updateTodo(todo);
  return { todo: updated };
});

type DeleteTodoArgsType = {
  todo: TodoEntitiy;
};

type DeleteFulFilledType = {
  id: string;
};

export const deleteTodoAction = createAsyncThunk<
  DeleteFulFilledType,
  DeleteTodoArgsType
>(`${ApiTodoActionName}/delete`, async ({ todo: { id } }) => {
  await todoService.deleteTodo(id);
  return { id };
});

type DeleteTodosArgsType = {
  ids: TodoEntitiy["id"][];
};
type DeleteTodosFulFilledType = {
  ids: TodoEntitiy["id"][];
};

export const deleteTodosAction = createAsyncThunk<
  DeleteTodosFulFilledType,
  DeleteTodosArgsType
>(`${ApiTodoActionName}/deleteBulk`, async ({ ids }) => {
  await Promise.all(ids.map(async (id) => await todoService.deleteTodo(id)));
  return { ids };
});
