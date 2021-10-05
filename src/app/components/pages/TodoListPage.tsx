import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { TodoListFormValues } from ".";
import { useGetTodos } from "../../feature/ApiTodo/ApiTodoOperator";
import ApiSelector from "../../feature/ApiTodo/ApiTodoSelector";
import PageTodoListSelector from "../../feature/Page/PageTodoListSelector";
import { useAppSelector } from "../../hooks";
import Progress from "../atoms/Progress";
import TodoList from "../organisms/TodoList";
import TodoTemplate from "../templates/TodoTemplate";

const TodoListPage: React.FC = () => {
  const { isLoading } = useAppSelector(ApiSelector);
  const { todos } = useAppSelector(PageTodoListSelector);

  const [getState, getTodos] = useGetTodos();

  const methods = useForm<TodoListFormValues>();

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  if (isLoading) {
    return <Progress />;
  }

  return (
    <FormProvider {...methods}>
      <TodoTemplate>
        <TodoList todos={todos} />
      </TodoTemplate>
    </FormProvider>
  );
};

export default TodoListPage;
