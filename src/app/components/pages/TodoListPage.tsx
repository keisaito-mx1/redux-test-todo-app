import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { TodoListFormValues } from '.';
import { getAllTodos } from '../../feature/Api/ApiActions';
import ApiSelector from '../../feature/Api/ApiSelector';
import PageTodoListSelector from '../../feature/Page/PageTodoListSelector';
import { useAppDispatch } from '../../hooks';
import Progress from '../atoms/Progress';
import TodoList from '../organisms/TodoList';
import TodoTemplate from '../templates/TodoTemplate';

const TodoListPage: React.FC = () => {
  const todos = useSelector(PageTodoListSelector.selectAll);
  const { isLoading } = useSelector(ApiSelector);

  const methods = useForm<TodoListFormValues>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);

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
