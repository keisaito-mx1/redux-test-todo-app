import List from '@material-ui/core/List';
import { useDispatch } from 'react-redux';
import { ApiSlice } from '../../feature/Api/ApiSlice';
import { Todo } from '../../types/tods';
import TodoItem from '../molecules/TodoItem';

type Props = {
  todos: Todo[];
};
const TodoList: React.FC<Props> = ({ todos }) => {
  const dispatch = useDispatch();

  const updateDispatch = (item: Todo) =>
    dispatch(ApiSlice.actions.updateTodo({ todo: item }));

  return (
    <List>
      {todos.map((todo) => (
        <TodoItem key={todo.id} item={todo} updateDispatch={updateDispatch} />
      ))}
    </List>
  );
};

export default TodoList;
