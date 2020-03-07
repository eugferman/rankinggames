export const increment = (num) => {
  return {
    type: 'INCREMENT',
    payload: num
  };
}

export const decrement = () => {
  return {
    type: 'DECREMENT'
  };
}

export const gamesToRedux = (games) =>{
  return {
    type: 'LOAD_GAMES',
    payload: games
  }
}

export const updateGames = (games) =>{
  return {
    type: 'UPDATE_GAMES',
    payload: games
  }
}


