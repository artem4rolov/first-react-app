import React from "react";
import ListGroupItem from "../list-group-item/list-group-item";
import "./list-group.css";

function ListGroup() {
  return (
    <ul className="app-list list-group">
      <ListGroupItem />
      <ListGroupItem />
      <ListGroupItem />
    </ul>
  );
}

export default ListGroup;
