import React from "react";
import { FaUser } from "react-icons/fa";
import { IoFlagSharp } from "react-icons/io5";

const Player = ({ player }) => {
  const {
    playerName,
    playerCountry,
    playerType,
    rating,
    battingStyle,
    bowlingStyle,
    playerImage,
    price,
  } = player;
  return (
    <div className="card bg-base-200 shadow-md">
      <figure>
        <img className=" max-h-60 w-full" src={playerImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <FaUser></FaUser> {playerName}
        </h2>
        <div className="flex justify-between items-center mt-2">
          <div className="flex gap-2 items-center  text-black/70">
            <IoFlagSharp></IoFlagSharp>
            <span>{playerCountry}</span>
          </div>
          <button className="btn">{playerType}</button>
        </div>
        <div className="divider"></div>
        <p className="flex items-center gap-2">
          <span>Rating:</span>{" "}
          <span className="text-red-600 text-lg">{rating}</span>
        </p>
        <div className="flex justify-between items-center my-2">
          <p>{battingStyle}</p>
          <p className="text-right">{bowlingStyle}</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Price: ${price}</p>
          <button className="btn">Choose Player</button>
        </div>
      </div>
    </div>
  );
};

export default Player;
