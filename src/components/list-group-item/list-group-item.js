import React from "react";
import "./List-group-item.css";

export default class ListGroupItem extends React.Component {
  render() {
    let classNames = "app-list-item d-flex justify-content-between";
    // забираем данные из props
    const {
      label,
      onDelete,
      onToggleImportant,
      onToggleLiked,
      important,
      like,
    } = this.props;
    // забираем данные из state для дальнейшего их изменения

    if (important) {
      classNames += " important";
    }

    if (like) {
      classNames += " like";
    }

    return (
      <>
        <div className={classNames}>
          <span className="app-list-item-label" onClick={onToggleLiked}>
            {label}
          </span>
          <div className="d-flex justify-content-center align-items-center">
            <button className="btn-star btn-sm" onClick={onToggleImportant}>
              <i className="bi bi-star-fill"></i>
            </button>
            <button className="btn-trash btn-sm" onClick={onDelete}>
              <i className="bi bi-trash3-fill"></i>
            </button>
            <i className="bi bi-heart-fill"></i>
          </div>
        </div>
      </>
    );
  }
}
