import React from "react";
import "./Search-panel.css";

export default class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    // изначально в строке поиска ничего нет
    this.state = {
      term: "",
    };
    // биндим метод для его работы
    this.onUpateSearch = this.onUpateSearch.bind(this);
  }

  // метод для изменения значения в стейте этого компонента и компонента App.js (нужно для того, чтобы в одном компоненте App.js было максимально много данных для их использования, т.к. отсюда state передать напрямую в App.js невозможно, приходится дублировать)
  onUpateSearch(e) {
    // переменная term берет значение из инпута (объект события event.target)
    const term = e.target.value;
    // изменяем стейт компонента Search-panel
    this.setState({ term });
    // передаем term в компонент App.js (это не рекурсия! просто пропс так назван)
    this.props.onUpateSearch(term);
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Поиск по записям"
        className="form-control search-input"
        // при каждом вводе символа меняем значение term в state
        onChange={this.onUpateSearch}
      />
    );
  }
}
