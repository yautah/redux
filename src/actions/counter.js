
export function increment() {
  return {
    type: 'increment',
  };
}

export function decrement() {
  return {
    type: 'decrement',
  };
}

export function incrementAsync() {
  return dispatch => {
    dispatch({
      type: 'incrementAsyncThunk',
    });
    setTimeout(() => {
      return dispatch({
        type: 'increment',
      });
    },1000);
  }
}

export function decrementAsync() {
  return dispatch => {
    dispatch({
      type: 'decrementAsyncThunk',
    });
    setTimeout(() => {
      return dispatch({
        type: 'decrement',
      });
    },1000);
  }
}

export function incrementAsyncSaga() {
  return {
    type: 'incrementAsyncSaga',
  };
}

export function decrementAsyncSaga() {
  return {
    type: 'decrementAsyncSaga',
  };
}
