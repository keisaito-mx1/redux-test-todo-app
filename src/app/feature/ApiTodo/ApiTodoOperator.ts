import React, { useCallback } from "react";
import { FieldValues, UseFormWatch } from "react-hook-form";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks";
import { Todo, TodoEntitiy } from "../../types/tods";
import {
  deleteTodosAction,
  getTodosAction,
  postTodoAction,
  updateTodoAction,
} from "./ApiTodoActions";
import ApiTodoSelector, { ApiTodoEntitiySelector } from "./ApiTodoSelector";
import ApiTodoSlice from "./ApiTodoSlice";

export const useGetTodos = (): [
  ReturnType<typeof ApiTodoSelector>,
  VoidFunction
] => {
  const dispatch = useAppDispatch();
  const state = useSelector(ApiTodoSelector);
  const operator = useCallback(() => {
    dispatch(getTodosAction());
  }, [dispatch]);
  return [state, operator];
};

export const usePostTodo = (): [
  ReturnType<typeof ApiTodoSelector>,
  (payload: Todo) => void
] => {
  const dispatch = useAppDispatch();
  const state = useSelector(ApiTodoSelector);
  const operator = useCallback(
    async (payload: Todo) => {
      await dispatch(postTodoAction({ todo: payload }));
    },
    [dispatch]
  );
  return [state, operator];
};

export const useUpdateTodo = (): [
  ReturnType<typeof ApiTodoSelector>,
  (payload: TodoEntitiy) => void
] => {
  const dispatch = useAppDispatch();
  const state = useSelector(ApiTodoSelector);

  const operator = useCallback(
    async (payload: TodoEntitiy) => {
      dispatch(updateTodoAction({ todo: payload }));
    },
    [dispatch]
  );
  return [state, operator];
};

export const useDeleteTodos = (): [
  ReturnType<typeof ApiTodoSelector>,
  (payload: TodoEntitiy["id"][]) => void
] => {
  const dispatch = useAppDispatch();
  const state = useSelector(ApiTodoSelector);
  const operator = useCallback(
    async (payload: TodoEntitiy["id"][]) => {
      dispatch(deleteTodosAction({ ids: payload }));
    },
    [dispatch]
  );
  return [state, operator];
};
export const useDeleteCompletedTodos = (): [
  ReturnType<typeof ApiTodoEntitiySelector.selectAll>,
  VoidFunction
] => {
  const dispatch = useAppDispatch();
  const todos = useSelector(ApiTodoEntitiySelector.selectAll);
  const operator = useCallback(async () => {
    const completed = todos
      .filter((todo) => todo.completed)
      .map((todo) => todo.id);
    dispatch(deleteTodosAction({ ids: completed }));
  }, [dispatch, todos]);
  return [todos, operator];
};

export const useWatchAsOnChange = <T extends FieldValues>(
  fieldName: keyof T,
  watch: UseFormWatch<T>
) => {
  React.useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (type === "change" && name === fieldName) {
      }
    });
    return () => subscription.unsubscribe();
  }, [fieldName, watch]);
};
