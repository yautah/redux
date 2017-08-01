
export default function counter(state={ counter: 0 }, action) {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        counter: state.counter+1,
      };
      break;
    case 'decrement':
      return {
        ...state,
        counter: state.counter-1,
      };
      break;

    default:
      return state;
  }
}
