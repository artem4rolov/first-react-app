import React from "react";
import ListGroupItem from "../list-group-item/list-group-item";
import "./list-group.css";

// принимаем в ListGroup посты (posts), которые приняли с сервера в app.js и передали в компонент ListGroup
function ListGroup({ posts }) {
  // сначала проверяем массив с объектами на наличие нужных ключей, и на то, что ключи не пустые
  const elements = posts
    .filter(
      (item) =>
        typeof item === "object" &&
        item.hasOwnProperty("label", "important", "id") &&
        item["label"] !== "" &&
        item["label"] !== null &&
        item["important"] !== "" &&
        item["imoortant"] !== null &&
        item["id"] !== "" &&
        item["id"] !== null
    )
    // пробегаем по массиву posts, выделяем отдельно id и остальные пропсы
    .map((post) => {
      const { id, ...postProps } = post;
      // записываем id и пропсы (можно отдельно, можно через спрэд-оператор) в каждый элемент li
      return (
        <li key={id} className="list-group-item">
          <ListGroupItem {...postProps} />
        </li>
      );
    });

  // затем полученные элементы li с данными постов рендерим в список ul
  return <ul className="app-list list-group">{elements}</ul>;
}

export default ListGroup;
