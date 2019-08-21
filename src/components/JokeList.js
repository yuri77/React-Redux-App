import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { getData } from "../actions";
import Joke from "./Joke";

const JokeList = props => {
  console.log("JokeList", props);
  return (
    <>
      <h2>Please rest your mind for a joke</h2>
      <button onClick={props.getData}>
        {props.isLoading ? (
          <Loader type="Puff" color="#00BFFF" height={15} width={100} />
        ) : (
          "Get Joke"
        )}
      </button>
      {props.jokes &&
        props.jokes.map(joke => {
          console.log("joke", joke);
          return (
            <Joke key={joke.id} setup={joke.setup} punch={joke.punchline} />
          );
        })}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    jokes: state.jokes
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(JokeList);
