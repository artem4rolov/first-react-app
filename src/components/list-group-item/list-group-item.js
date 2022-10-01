import React from "react";
import "./list-goup-item.css";

export default class ListGroupItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      important: false,
      like: false,
    };
    // this.onImportant = this.onImportant.bind(this);
  }

  onImportant = () => {
    this.setState(({ important }) => ({
      important: !important,
    }));
  };

  onLike = () => {
    this.setState(({ like }) => ({
      like: !like,
    }));
  };

  render() {
    let classNames = "app-list-item d-flex justify-content-between";
    const { label } = this.props;
    const { important } = this.state;
    const { like } = this.state;

    if (important) {
      classNames += " important";
    }

    if (like) {
      classNames += " like";
    }

    return (
      <>
        <div className={classNames}>
          <span className="app-list-item-label" onClick={this.onLike}>
            {label}
          </span>
          <div className="d-flex justify-content-center align-items-center">
            <button className="btn-star btn-sm" onClick={this.onImportant}>
              <i className="bi bi-star-fill"></i>
            </button>
            <button className="btn-trash btn-sm">
              <i className="bi bi-trash3-fill"></i>
            </button>
            <i className="bi bi-heart-fill"></i>
          </div>
        </div>
      </>
    );
  }
}
