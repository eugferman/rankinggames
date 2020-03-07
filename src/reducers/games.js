const data = require('../data/data.json');

const gamesReducer = (state = data, action) => {
  switch (action.type) {
    case "LOAD_GAMES":
      return state;
    default:
      return state;
  }
};

export default gamesReducer;