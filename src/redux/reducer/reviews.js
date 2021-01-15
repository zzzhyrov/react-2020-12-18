import produce from 'immer';
import {
  ADD_REVIEW,
  REQUEST,
  SUCCESS,
  FAILURE,
  LOAD_REVIEWS,
} from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export default (state = initialState, action) => {
  const { type, payload, reviewId, userId, data, error } = action;

  switch (type) {
    case LOAD_REVIEWS + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_REVIEWS + SUCCESS:
      return {
        ...state,
        entities: arrToMap(data),
        loading: false,
        loaded: true,
      };
    case LOAD_REVIEWS + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error,
      };

    case ADD_REVIEW:
      const { text, rating } = payload.review;
      return produce(state, (draft) => {
        draft.entities[reviewId] = {
          id: reviewId,
          userId,
          text,
          rating,
        };
      });

    default:
      return state;
  }
};
