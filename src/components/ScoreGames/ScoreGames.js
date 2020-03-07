import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { updateGames } from '../../redux/actions/index';


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
    <div>
      <h1>Score Games</h1>
      <form onSubmit={onSubmitForm}>
        <select id="formsel" onChange={handleSelectedGameId}>
          <option disabled selected>Select One</option>
          {gamesRedux.map(({name, id}) =>
          <option data-testid={`select-${id}`} key={id} value={id}>{name}</option> 
          )}
        </select>
        <input
          placeholder="Puntua de 0 a 10..."
          type="text"
          data-testid="puntuation"
          onChange={handlePuntuation}
        />
        <br />
        <input
         type="submit"
         value="PUNTUAR"
         data-testid="submit"
        />
      </form>
    </div>
  );
}

export default ScoreGames;
