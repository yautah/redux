import React, { Component, PropTypes } from 'react';

class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number,
    increment: PropTypes.func,
    decrement: PropTypes.func,
    incrementAsync: PropTypes.func,
  };

  render() {
    const { increment, decrement, incrementAsync, decrementAsync, incrementAsyncSaga, decrementAsyncSaga, counter } = this.props;


    return (
      <div>
        <p>
          点击: {counter} 次
        </p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={incrementAsync}>异步+(thunk)</button>
        <button onClick={decrementAsync}>异步-(thunk)</button>
        <button onClick={incrementAsyncSaga}>异步+(redux-saga)</button>
        <button onClick={decrementAsyncSaga}>异步-(redux-saga)</button>
      </div>
    );
  }
}

export default Counter;
