import React, { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, gamesToRedux} from './actions/index';
import ListGamesRedux from './components/ListGamesRedux/ListGamesRedux';
import ScoreGames from './components/ScoreGames/ScoreGames';
import apiService from './services/apiService';


import "./App.css";

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const games = await apiService();
      dispatch(gamesToRedux(games));
    }
    fetchData();
  }, []);

  return (
    <div>
      <ScoreGames></ScoreGames>
      <ListGamesRedux></ListGamesRedux>
      
      <hr></hr>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      {!isLogged ? <h3>Valuable information i shouldn't see</h3> : ''}
      
    </div>
  );
}

export default App;
