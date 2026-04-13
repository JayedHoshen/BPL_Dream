import React from "react";
import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Selected = ({ player, handleDeleteSelectedPlayer }) => {
  return (
    <div
      key={player.id}
      className="flex justify-between items-center p-3 border-2 border-gray-100 shadow-sm rounded-xl"
    >
      <div className="flex gap-3 items-center">
        <img
          className="h-16 w-16 rounded-xl"
          src={player.playerImage}
          alt={player.playerName}
        />
        <div className="space-y-2">
          <h2 className="flex items-center gap-2 font-semibold text-lg">
            <FaUser></FaUser> {player.playerName}
          </h2>
          <p>{player.playerType}</p>
        </div>
      </div>
      <button
        onClick={() => handleDeleteSelectedPlayer(player)}
        className="btn text-lg text-red-500"
      >
        <MdDelete></MdDelete>
      </button>
    </div>
  );
};

export default Selected;
