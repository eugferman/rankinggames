import React, { useEffect } from "react";
import {useDispatch} from 'react-redux';
import {gamesToRedux} from './redux/actions/index';
import ListGamesRedux from './components/ListGamesRedux/ListGamesRedux';
import ScoreGames from './components/ScoreGames/ScoreGames';
import apiService from './services/apiService';

import "./App.css";

function App() {
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
      <ScoreGames />
      <ListGamesRedux />
    </div>
  );
}

export default App;
