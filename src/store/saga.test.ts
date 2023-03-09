import { expectSaga } from "redux-saga-test-plan";
import { call, put, take } from "redux-saga/effects";
import * as matchers from "redux-saga-test-plan/matchers";
import rootSaga, { delay, incrementAsync } from "./saga";

jest.setTimeout(10_000);

describe("test saga", () => {
  it("it should test saga", () => {
    return expectSaga(incrementAsync)
      .provide([[matchers.call.fn(delay), null]])
      .call.like({ fn: delay, args: [1000000] })
      .put.like({ action: { type: "counter/decrement", payload: undefined } })
      .run(10_000);
  });
});
