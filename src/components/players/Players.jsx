import React, { use } from "react";
import AvailablePlayers from "../availablePlayers/AvailablePlayers";

const Players = ({ playersPromise }) => {
  const playersData = use(playersPromise);

  return (
    <div className="container mx-auto">
      <h2>Players: {playersData.length}</h2>
      <AvailablePlayers playersData={playersData}></AvailablePlayers>
    </div>
  );
};

export default Players;
