import reducer, {initialState} from "./feedReducer";
import {FETCH_FEED_LOADING, FETCH_FEED_SUCCESS,FETCH_SINGLE_SUCCESS,} from "../actions/feedActionTypes"

describe("fundamental reducer test", () => {
  it("testing initial state", () => {
      const state = reducer(undefined, {});
      expect(state).toEqual(initialState);
  });

  it("testing FETCH_FEED_LOADING", () => {
      const action = {type: FETCH_FEED_LOADING, loading: false}
      const state = reducer(undefined, action);
      expect(state).toEqual({...initialState, loading: false})
  });
});
