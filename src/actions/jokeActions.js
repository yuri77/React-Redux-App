import axios from "axios";

export const FETCH_JOKE_DATA_START = "FETCH_JOKE_DATA_START";
export const FETCH_JOKE_DATA_SUCCESS = "FETCH_JOKE_DATA_SUCCESS";
export const FETCH_JOKE_DATA_FAILURE = "FETCH_JOKE_DATA_FAILURE";

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_JOKE_DATA_START });
    axios
      .get("https://official-joke-api.appspot.com/jokes/programming/ten")
      .then(res => {
        console.log(res.data);
        dispatch({ type: FETCH_JOKE_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_JOKE_DATA_FAILURE, payload: err.response });
      });
  };
};
