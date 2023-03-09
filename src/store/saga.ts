import { takeEvery, put, takeLatest, call } from "redux-saga/effects";
import { counterSlice } from "./counterSlice";

export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export function* incrementAsync() {
  yield call(delay, 1000000);
  yield put(counterSlice.actions.decrement());
}

export default function* rootSaga() {
  yield takeLatest("INCREMENT_ASYNC", incrementAsync);
}
