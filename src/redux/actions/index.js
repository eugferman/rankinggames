export const gamesToRedux = games => {
  return {
    type: "LOAD_GAMES",
    payload: games
  };
};

export const updateGames = games => {
  return {
    type: "UPDATE_GAMES",
    payload: games
  };
};
