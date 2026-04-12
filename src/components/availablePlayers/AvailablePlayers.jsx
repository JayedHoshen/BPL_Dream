import React from "react";
import Player from "../players/Player";

const AvailablePlayers = ({
  playersData,
  coin,
  setCoin,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {playersData.map((player) => (
        <Player
          player={player}
          key={player.id}
          coin={coin}
          setCoin={setCoin}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        ></Player>
      ))}
    </div>
  );
};

export default AvailablePlayers;
