import { store } from "../../store";
import ApiSelector from "./ApiTodoSelector";

it("InitialStateを取得できること。", () => {
  const state = store.getState();
  const actual = ApiSelector(state);

  expect(actual).toStrictEqual({});
});
