import { store } from "../../store";
import ApiAuthSelector from "./ApiAuthSelector";
import { ApiAuthInitialState } from "./ApiAuthState";

it("InitialStateを取得できること。", () => {
  const state = store.getState();
  const actual = ApiAuthSelector(state);
  expect(actual).toStrictEqual(ApiAuthInitialState);
});
