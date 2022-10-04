import React from "react";
import "./List-group-item.css";

export default class ListGroupItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      important: false,
      like: false,
    };
    // this.onImportant = this.onImportant.bind(this);
    // можно не биндить - просто использовать стрелочную функцию как метод
  }

  // метод для избранного
  onImportant = () => {
    this.setState(({ important }) => ({
      important: !important,
    }));
  };

  // метод для лайка
  onLike = () => {
    this.setState(({ like }) => ({
      like: !like,
    }));
  };

  render() {
    let classNames = "app-list-item d-flex justify-content-between";
    // забираем данные из props
    const { label, onDelete } = this.props;
    // забираем данные из state для дальнейшего их изменения
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
