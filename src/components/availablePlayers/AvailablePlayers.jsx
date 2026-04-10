import React from "react";
import Player from "../players/Player";

const AvailablePlayers = ({ playersData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
      {playersData.map((player) => (
        <Player player={player} key={player.id}></Player>
      ))}
    </div>
  );
};

export default AvailablePlayers;
