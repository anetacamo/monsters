import React from "react";
import "../css/cardlist.css";

const SearchBox = ({ onInputChange, placeholder }) => {
  return <input placeholder={placeholder} onChange={onInputChange} />;
};

export default SearchBox;
