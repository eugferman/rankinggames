import React, { useState } from "react";

function ScoreGames() {
  const [puntuacion, setPuntuacion] = useState("");

  const puntuarGame = () => {
    return alert("hola");
  };

  const handlePuntuacion = async event => {
    event.preventDefault();
    console.log("puntuación: ", puntuacion);
  };

  return (
    <div>
      <h1>Score Games</h1>
      <form onSubmit={handlePuntuacion}>
        <select id="formsel">
          <option value="0">Zelda: Breath of the wild</option>
          <option value="1">Octopath Traveler</option>
          <option value="2">Metal Gear Solid</option>
          <option value="3">Banjo Kazooie</option>
          <option value="4">Pokemon Blue</option>
          <option value="5">Final Fantasy VII</option>
          <option value="6">Kitty vs Barbie</option>
          <option value="7">Xenoblace Chronicles</option>
          <option value="8">Dragon Quest XI</option>
          <option value="9">Fortnite</option>
        </select>
        <input
          placeholder="Puntua de 0 a 10..."
          type="text"
          onChange={event => setPuntuacion(event.target.value)}
        />
        <br />
        <input type="submit" value="PUNTUAR" />
      </form>
    </div>
  );
}

export default ScoreGames;
