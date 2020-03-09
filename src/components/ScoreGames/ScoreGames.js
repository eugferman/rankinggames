import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { updateGames } from '../../redux/actions/index';

import './ScoreGames.scss';

function ScoreGames() {
  const [puntuation, setPuntuation] = useState("");
  const [selectedGameId, setSelectedGameId] = useState("");
  const dispatch = useDispatch();

  const gamesRedux = useSelector(state => state.games);

  const handlePuntuation = event => {
    setPuntuation(event.target.value);
  };

  const handleSelectedGameId = event => {
    setSelectedGameId(event.target.value);
    
  }

  const onSubmitForm = (event) => {
    event.preventDefault();
    const updatedGames = gamesRedux.map(game => {
      if (game.id === selectedGameId){
        return {
          ...game, 
          score: puntuation
        }
      }
      return game;   
    })
    dispatch(updateGames(updatedGames));
  }

  return (
    <div className="main-score-games">
      <h1>Rangking Games</h1>
      <form className="form-score-games" onSubmit={onSubmitForm}>
        <select className="form-select" id="formsel" onChange={handleSelectedGameId}>
          <option disabled selected>Select One</option>
          {gamesRedux.map(({name, id}) =>
          <option data-testid={`select-${id}`} key={id} value={id}>{name}</option> 
          )}
        </select>
        <input
          placeholder="Score from 0 to 10..."
          type="text"
          data-testid="puntuation"
          onChange={handlePuntuation}
        />
        <br />
        <input
         type="submit"
         value="SCORE"
         data-testid="submit"
        />
      </form>
    </div>
  );
}

export default ScoreGames;
