import { take, fork, put, call, takeEvery } from 'redux-saga/effects';

const delay = (ms) => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  })
};

export function* incrementAsync() {
  while(true) {
    yield take('incrementAsyncSaga');
    yield call(delay, 1000);
    yield put({ type: 'increment' });
  }
}

export function* decrementAsync() {
  yield call(delay, 1000);
  yield put({ type: 'decrement' });
}

export default function* rootSaga() {
  // yield takeEvery('incrementAsyncSaga', incrementAsync);
  // yield takeEvery('decrementAsyncSaga', incrementAsync);
  yield fork(incrementAsync);
  yield takeEvery('decrementAsyncSaga', decrementAsync);
}
