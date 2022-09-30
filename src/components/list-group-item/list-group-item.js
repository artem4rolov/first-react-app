import React from "react";
import "./list-goup-item.css";

function ListGroupItem() {
  return (
    <>
      <li className="app-list-item d-flex justify-content-between">
        <span className="app-list-item-label">Hello World!</span>
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn-star btn-sm">
            <i className="bi bi-star-fill"></i>
          </button>
          <button className="btn-trash btn-sm">
            <i className="bi bi-trash3-fill"></i>
          </button>
          <i className="bi bi-heart-fill"></i>
        </div>
      </li>
    </>
  );
}

export default ListGroupItem;
