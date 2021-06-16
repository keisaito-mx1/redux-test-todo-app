import { RootState } from '../../store';
import { todosAdapter } from '../Api/ApiSlice';

const PageTodoListSelector = todosAdapter.getSelectors<RootState>(
  (state) => state.Api
);

export default PageTodoListSelector;
