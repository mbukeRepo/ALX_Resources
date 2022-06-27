import reducer, {initialState} from "./authReducer";
import {AUTH_FAILED, AUTH_SUCCESS} from "../actions/authActionTypes"

describe("fundamental reducer test", () => {
  it("testing initial state", () => {
      const state = reducer(undefined, {});
      expect(state).toEqual(initialState);
  });
});
