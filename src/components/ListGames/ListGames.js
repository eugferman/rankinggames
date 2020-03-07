import React, { useState, useEffect } from "react";

export const ListGames = () => {

  const [games, setGames] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:3000/data.json")
      .then(response => response.json())
      .then(data => setGames(data));
  }, []);
  
  return (
    <div>
      <ul>
        {games.map(listGames => (
          <li key={listGames.id}>
            <p>Name: {listGames.name}</p>
            <p>Score: {listGames.score}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};








