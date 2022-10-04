import React from "react";
import "./Bottom-panel.css";

function BottomPanel({ onAdd }) {
  // передаем метод onAdd из App.js в кнопку "Добавить пост"
  return (
    <div className="bottom-panel d-flex">
      <input
        type="text"
        placeholder="О чем думаете?"
        className="form-control new-post-label"
      />
      <button
        type="submit"
        className="btn btn-outline-secondary"
        onClick={() => onAdd("hello")}
      >
        Добавить пост
      </button>
    </div>
  );
}

export default BottomPanel;
