import React from "react";
import {useSelector} from 'react-redux';

import './ListGamesRedux.scss';

function ListGamesRedux() {

  const gamesRedux = useSelector(state => state.games);
  const gamesSorted = gamesRedux.sort((a, b) => a.score - b.score);

  return <div>
   <h1>List games redux:</h1>
      <ul>
        {gamesSorted.map(listGames => (
          <li key={listGames.id}>
            <p>Name: {listGames.name}</p>
            <p>Score: {listGames.score}</p>
            <img src={listGames.cover} alt={listGames.name}></img>
          </li>
        ))}
      </ul>
    </div>
}

export default ListGamesRedux;