const gamesReducer = (state = [], action) => {
  switch (action.type) {
    case "LOAD_GAMES":
      return state.concat(action.payload);
    case "UPDATE_GAMES":
      return action.payload;
    default:
      return state;
  }
};

export default gamesReducer;
