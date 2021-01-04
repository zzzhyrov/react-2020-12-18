import { DECREMENT, INCREMENT, REMOVE } from '../constants';

// { [productId]: amount }
export default (state = 0, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [payload.id]: (state[payload.id] || 0) + 1 };
    case DECREMENT:
      return {
        ...state,
        [payload.id]: state[payload.id] > 0 ? state[payload.id] - 1 : 0,
      };
    case REMOVE:
      return { ...state, [payload.id]: null };
    default:
      return state;
  }
};
