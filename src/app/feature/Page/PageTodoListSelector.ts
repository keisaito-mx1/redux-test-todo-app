import { createSelector } from "@reduxjs/toolkit";
import { ApiTodoEntitiySelector } from "../ApiTodo/ApiTodoSelector";
import { PageTodoListState } from "./PageTodoListState";

const PageTodoListSelector = createSelector(
  [ApiTodoEntitiySelector.selectAll],
  (todos): PageTodoListState => ({ todos })
);

export default PageTodoListSelector;
