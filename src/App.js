import React from "react";
import "./App.scss";
import JokeList from "./components/JokeList";

function App() {
  return (
    <div className="App">
      <h1>Pick Your Jokes</h1>
      <JokeList />
    </div>
  );
}

export default App;
