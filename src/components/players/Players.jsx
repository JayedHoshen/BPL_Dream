import React, { use, useState } from "react";
import AvailablePlayers from "../availablePlayers/AvailablePlayers";
import SelectedPlayers from "../selectedPlayers/SelectedPlayers";

const Players = ({ playersPromise }) => {
  const [selectedType, setSelectedType] = useState("available");

  const playersData = use(playersPromise);

  return (
    <div className="container mx-auto my-15">
      <div className="flex justify-between items-center my-6">
        {selectedType === "available" ? (
          <h2 className="text-2xl font-bold">Available Players</h2>
        ) : (
          <h2 className="text-2xl font-bold">
            Selected Player (4/{playersData.length})
          </h2>
        )}
        <div>
          <button
            onClick={() => setSelectedType("available")}
            className={`btn ${selectedType === "available" ? "bg-[#E7FE29]" : ""} rounded-r-none rounded-l-xl`}
          >
            Available
          </button>
          <button
            onClick={() => setSelectedType("selected")}
            className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]" : ""} rounded-l-none rounded-r-xl`}
          >
            Selected ( <span>0</span> )
          </button>
        </div>
      </div>
      {selectedType === "available" ? (
        <AvailablePlayers playersData={playersData}></AvailablePlayers>
      ) : (
        <SelectedPlayers playersData={playersData}></SelectedPlayers>
      )}
    </div>
  );
};

export default Players;
