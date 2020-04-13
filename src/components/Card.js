import React from "react";
import "../css/cardlist.css";

const Card = ({ monster }) => {
  return (
    <div className="card" key={monster.id}>
      <h2>{monster.name}</h2>
      <h3>{monster.username}</h3>
      <img
        alt="monster"
        src={`https://robohash.org/${monster.id}?size=180x180`}
      />
    </div>
  );
};

export default Card;
