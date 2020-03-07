import { useState, useEffect } from "react";

const apiService = () => {

  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data.json")
      .then(response => response.json())
      .then(data => setGames(data));
      
  }, []);  
  
  return games;
}
export default apiService;
