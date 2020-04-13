import React from "react";
import "../css/cardlist.css";
import Card from "../components/Card";

const CardList = (props) => {
  return (
    <div className="cardlist">
      {props.monsters.map((monster) => (
        <Card monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
