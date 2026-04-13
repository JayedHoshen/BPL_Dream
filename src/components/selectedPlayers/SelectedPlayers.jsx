import React from "react";
import Selected from "../players/Selected";
import { toast } from "react-toastify";

const SelectedPlayers = ({
  coin,
  setCoin,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  const handleDeleteSelectedPlayer = (player) => {
    const filteredPlayers = selectedPlayers.filter(
      (selectedPlayer) => selectedPlayer.playerName != player.playerName,
    );
    setSelectedPlayers(filteredPlayers);
    toast.info(`${player.playerName} is deleted`);
    setCoin(coin + player.price);
  };

  return (
    <div className="space-y-4">
      {selectedPlayers.length < 1 ? (
        <div className="bg-gray-50 shadow-sm p-8 rounded-lg flex flex-col gap-4 items-center my-10">
          <h2 className="font-semibold text-2xl">No players selected yet</h2>
          <p>Go to Available tab to select players</p>
        </div>
      ) : (
        selectedPlayers.map((player) => {
          return (
            <Selected
              key={player.id}
              player={player}
              handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}
            ></Selected>
          );
        })
      )}
    </div>
  );
};

export default SelectedPlayers;
