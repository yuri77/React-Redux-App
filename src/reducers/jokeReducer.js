import {
  FETCH_JOKE_DATA_START,
  FETCH_JOKE_DATA_SUCCESS,
  FETCH_JOKE_DATA_FAILURE
} from "../actions";

const initialState = {
  jokes: [],
  isLoading: false,
  error: ""
};

export const jokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOKE_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };

    case FETCH_JOKE_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        jokes: action.payload,
        error: ""
      };
    default:
      return state;
  }
};
