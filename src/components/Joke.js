import React from "react";

const Joke = props => {
  const { setup, punch } = props;
  return (
    <div>
      <p>Q: {setup}</p>
      <p>A: {punch}</p>
    </div>
  );
};

export default Joke;
