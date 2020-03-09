import React from "react";
import { useSelector } from "react-redux";

import "./ListGames.scss";

function ListGames() {
  const gamesRedux = useSelector(state => state.games);
  const gamesSorted = gamesRedux.sort((a, b) => b.score - a.score);

  return (
    <div className="main-list-games">
      <div className="list-games">
        <ul>
          {gamesSorted.map(listGames => {
            return (
              <li data-testid={listGames.id} key={listGames.id}>
                <p>{listGames.name}</p>
                <p>Score: {listGames.score}</p>
                <img src={listGames.cover} alt={listGames.name}></img>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ListGames;
