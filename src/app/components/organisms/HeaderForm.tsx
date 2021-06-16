import styled from '@emotion/styled';
import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { ApiSlice } from '../../feature/Api/ApiSlice';
import { useAppDispatch } from '../../hooks';
import { Todo } from '../../types/tods';
import Button from '../atoms/Buttons';
import Input from '../atoms/Input';
import { TodoListFormValues } from '../pages';

const Wrapper = styled.form({
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gap: '4px',
});

type Props = { placeholder: string };

const HeaderForm: React.FC<Props> = ({ placeholder }) => {
  const { register, handleSubmit } = useFormContext<TodoListFormValues>();
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<TodoListFormValues> = (e) => {
    const newValue: Todo = {
      id: nanoid(),
      text: e.text,
      completed: false,
      createdAt: Date.now(),
    };

    dispatch(ApiSlice.actions.addTodo(newValue));
  };

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder={placeholder}
        refs={register('text', { required: true })}
        type="text"
      />
      <Button label="ADD" />
    </Wrapper>
  );
};

export default HeaderForm;
