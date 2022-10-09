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

function toggle(body) {
  console.log(body);
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //имитация получения данных с сервера
      data: [
        // "ляля",
        // { f: 1 },
        // {},
        // { label: "" },
        { label: "Первый", important: false, like: false, id: "dsfdf" },
        { label: "Второй", important: false, like: false, id: "sdfsf" },
        { label: "Третий", important: false, like: false, id: "fdsf" },
      ],
      // переменная term для поиска постов
      term: "",
      // переменная filter для определения активной кнопки фильтрации постов (ВСЕ \ ПОНРАВИЛИСЬ)
      filter: "all",
    };
    // 'биндим' методы для привязки к конкретному посту (иначе не работает)
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);
    this.onUpateSearch = this.onUpateSearch.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);
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

  // метод для отметки поста "в избранное" (метод идентичен методу лайка, кроме одного изменяемого ключа в объекте)
  onToggleImportant(id) {
    this.setState(({ data }) => {
      // находим элемент, который хотим добавить в избранное
      const index = data.findIndex((elem) => elem.id === id);

      // определеяем этот элемент в переменную old
      const old = data[index];
      // создаем новый элемент, где изменяем лишь один ключ на противоположное значение
      const newItem = { ...old, important: !old.important };

      // создаем новый массив данных (поделенный на 2 части, до элемента и после) и между частями помещаем новый элемент с измененным ключом
      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];

      // записываем новый массив в наш стейт
      return {
        data: newArr,
      };
    });
  }

  // метод для лайка поста
  onToggleLiked(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);

      const old = data[index];
      const newItem = { ...old, like: !old.like };

      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];

      return {
        data: newArr,
      };
    });
  }

  // метод для поиска постов, используя инпут
  searchPost(items, term) {
    // принимает в себя какие-то данные (в нашем случае массив data с объектами - постами) и значение из строки поиска (term)
    // если в строке поиска ничего не написано, просто показываем все элементы (посты)
    if (term.length === 0) {
      return items;
    }

    // если в строке поиска (term) что-то написано, то фильтруем наш массив данных, проверяем каждый item
    return items.filter((item) => {
      // если в ключе label объекта item есть совпадения с тем, что написано в строке поиска поста (term) - возвращаем этот элемент из массива данных (постов)
      return item.label.indexOf(term) > -1;
    });
  }

  // метод для фильтрации постов
  // принимает в себя какие-то данные (в нашем случае массив data с объектами - постами) и значение фильтра (filter) из стейта
  // filter в свою очередь получаем из компонента PostStatusFilter (на какую кнопку нажали - all или like)
  filterPost(items, filter) {
    // если фльтр like, то
    if (filter === "like") {
      // показываем только лайканные посты
      return items.filter((item) => item.like);
    } else {
      // если фильтр любого значения, кроме like, то показываем все посты из массива дынных this.state.data
      return items;
    }
  }

  // метод для постоянного обновления значения в строке поиска и изменения этого значения в стейте
  // для подробностей - нужно посмотреть компонент Search-panel, куда мы передаем как пропс этот метод
  onUpateSearch(term) {
    this.setState({ term });
  }

  // метод для смены значения this.state.filter, который берем из элемента Post-status-filter
  onFilterSelect(filter) {
    this.setState({ filter });
  }

  render() {
    // забираем сразу переменные из стейта, чтобы постоянно не прописывать this.state...
    const { data, term, filter } = this.state;

    // количество лайканных постов
    const liked = data.filter((item) => item.like).length;
    // общее количество постов
    const allPosts = data.length;

    // показываем посты, которые необходимо
    // метод searchPost проверяет значения инпута, где поиск постов (принимает в себя два аргумента)
    // метод filterPost проверяет, какая из кнопок (ВСЕ ПОСТЫ \ ПОНРАВИВИШИЕСЯ ПОСТЫ) нажата (принимает в себя два аргумента)
    const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

    // в компонент AppHeader передаем количество лайканных постов и общее количество постов
    // в компонент SearchPanel передаем метод по поиску постов (через инпут)
    // в компоненте PostStatusFilter принимаем значения из компонента PostStatusFilter через метод onFilterSelect, который в свою очередь отслеживает, какая из кнопок (ВСЕ ПОСТЫ \ ПОНРАВИВИШИЕСЯ ПОСТЫ) нажата
    //в компонент ListGroup передаем только посты, которые нужно показать (переменная visiblePosts), метод по удалению, отметки в важное и лайку постов
    //в компонент BottomPanel передаем метод по добавлению постов
    return (
      <div className="app">
        <AppHeader liked={liked} allPosts={allPosts} />
        <div className="search-panel d-flex">
          <SearchPanel onUpateSearch={this.onUpateSearch} />
          <PostStatusFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}
          />
        </div>
        <ListGroup
          posts={visiblePosts}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
        />
        <BottomPanel onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
