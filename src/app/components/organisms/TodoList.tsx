import styled from "@emotion/styled";
import List from "@material-ui/core/List";
import { useForm } from "react-hook-form";
import {
  useDeleteCompletedTodos,
  useDeleteTodos,
  useUpdateTodo,
} from "../../feature/ApiTodo/ApiTodoOperator";
import { TodoEntitiy } from "../../types/tods";
import Button from "../atoms/Buttons";
import TodoItem from "../molecules/TodoItem";

const Form = styled.form();

type Props = {
  todos: TodoEntitiy[];
};
const TodoList: React.FC<Props> = ({ todos }) => {
  const [updateState, updateTodo] = useUpdateTodo();
  const [deleteState, deleteTodos] = useDeleteCompletedTodos();
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    deleteTodos();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <List>
        {todos.map((todo) => (
          <TodoItem key={todo.id} item={todo} />
        ))}
        <Button label="DELETE" />
      </List>
    </Form>
  );
};

export default TodoList;
