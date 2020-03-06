import React from "react";
import ListGames from "./components/ListGames/ListGames";
import ScoreGames from "./components/ScoreGames/ScoreGames";

import "./App.css";

function App() {
  return (
    <div>
      <ScoreGames></ScoreGames>
      <ListGames></ListGames>
    </div>
  );
}

export default App;
