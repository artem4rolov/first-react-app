import React from "react";
import "./bottom-panel.css";

function BottomPanel() {
  return (
    <form className="bottom-panel d-flex">
      <input
        type="text"
        placeholder="О чем думаете?"
        className="form-control new-post-label"
      />
      <button type="submit" className="btn btn-outline-secondary">
        Добавить пост
      </button>
    </form>
  );
}

export default BottomPanel;
