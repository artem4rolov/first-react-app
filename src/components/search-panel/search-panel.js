import React from "react";
import "./Search-panel.css";

function SearchPanel() {
  return (
    <input
      type="text"
      placeholder="Поиск по записям"
      className="form-control search-input"
    />
  );
}

export default SearchPanel;
