import React from "react";
import AppHeader from "../App-header/App-header.js";
import SearchPanel from "../Search-panel/Search-panel.js";
import PostStatusFilter from "../Post-status-filter/Post-status-filter.js";
import ListGroup from "../List-group/List-group.js";
import BottomPanel from "../Bottom-panel/Bottom-panel.js";
// импортируем генератор id для постов
import nextId from "react-id-generator";
//
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //имитация получения данных с сервера
      data: [
        "ляля",
        { f: 1 },
        {},
        { label: "" },
        { label: "Первый", important: false, id: "dsfdf" },
        { label: "Второй", important: true, id: "sdfsf" },
        { label: "Третий", important: false, id: "fdsf" },
      ],
    };
    // 'биндим' методы для привязки к конкретному посту (иначе не работает)
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  // метод по удалению поста
  // принимаем id для определения, на какой пост (элемент) кликнули (id принимаем здесь, а передаем в компоненте ListGroup)
  deleteItem(id) {
    // обязательно, если меняем state, вызываем метод setState!!!!
    this.setState(({ data }) => {
      // определяем индекс элемента в массиве, на который кликнули
      const index = data.findIndex((elem) => elem.id === id);

      // создаем две части массива для того, чтобы поменять state
      // часть от начала массива ДО кликнутого (поста) элемента
      const before = data.slice(0, index);
      // часть от следующего, после кликнутого элемента и до конца массива
      const after = data.slice(index + 1);

      // таким образом склеиваем новый массив без элемента, на который кликнули
      const newArr = [...before, ...after];

      // записываем новый массив в state
      return {
        data: newArr,
      };
    });
  }

  // метод, который добавляет новый лемент (пост) в state
  addItem(body) {
    // использую генератор id для элементов
    const htmlId = nextId();

    // структура нового поста, где body - текст из input в форме компонента Bottom-panel
    const item = {
      label: body,
      important: false,
      id: htmlId,
    };

    // меняем state
    this.setState(({ data }) => {
      // напрямую data.push(item) НЕЛЬЗЯ!!!!!!!!!!!!!!!
      // создаем новый массив из предыдущих постов (data) и нового элемента item
      const newArr = [...data, item];

      // записываем новый массив в state
      return {
        data: newArr,
      };
    });
  }

  render() {
    //в компонент ListGroup передаем объекты постов с сервера (массив data) и методы по удалению постов
    //в компонент BottomPanel передаем метод по удалению постов
    return (
      <div className="app">
        <AppHeader />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <ListGroup posts={this.state.data} onDelete={this.deleteItem} />
        <BottomPanel onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
