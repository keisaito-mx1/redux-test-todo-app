import styled from "@emotion/styled";
import React from "react";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { usePostTodo } from "../../feature/ApiTodo/ApiTodoOperator";
import { Todo } from "../../types/tods";
import Button from "../atoms/Buttons";
import Input from "../atoms/Input";
import { TodoListFormValues } from "../pages";

const Wrapper = styled.form({
  display: "grid",
  gridTemplateColumns: "1fr auto",
  gap: "4px",
});

type Props = { placeholder: string };

const HeaderForm: React.FC<Props> = ({ placeholder }) => {
  const { register, handleSubmit } = useFormContext<TodoListFormValues>();
  const [_, postTodo] = usePostTodo();

  const onSubmit: SubmitHandler<TodoListFormValues> = (data) => {
    const newValue: Todo = {
      text: data.text,
      completed: false,
    };
    postTodo(newValue);
  };

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder={placeholder}
        refs={register("text", { required: true })}
        type="text"
      />
      <Button label="ADD" />
    </Wrapper>
  );
};

export default HeaderForm;
