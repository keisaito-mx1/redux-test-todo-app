import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { getInitialStore } from "../../store";
import TodoListPage from "./TodoListPage";

afterEach(cleanup);

it("TodoListPage コンポーネントが描画されていること。", () => {
  const store = getInitialStore();
  render(
    <Provider store={store}>
      <TodoListPage />
    </Provider>
  );
  expect(TodoListPage).toBeTruthy();
});
it("TODOが追加されること。", async () => {
  const store = getInitialStore();

  const { findByPlaceholderText, getByText } = render(
    <Provider store={store}>
      <TodoListPage />
    </Provider>
  );

  //The default timeout is 1000ms which will keep you under Jest's default timeout of 5000ms.
  //https://testing-library.com/docs/dom-testing-library/api-async
  const inputForm = await findByPlaceholderText("Input Your Task");
  const inputText = "New Task !!";

  //handleSubmit は非同期で実行されるので、 送信したことを検出するために waitFor や find* メソッドを使います。
  //https://react-hook-form.com/jp/advanced-usage#TestingForm
  act(() => {
    userEvent.type(inputForm, inputText);
    userEvent.click(getByText(/ADD/));
  });

  await waitFor(() => {
    const actual = screen.getByText(inputText);
    expect(actual).toBeTruthy();
  });

  expect(TodoListPage).toBeTruthy();
});
