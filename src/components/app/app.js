import AppHeader from "../app-header/app-header.js";
import SearchPanel from "../search-panel/search-panel.js";
import PostStatusFilter from "../post-status-filter/post-status-filter.js";
import ListGroup from "../list-group/list-group.js";
import BottomPanel from "../bottom-panel/bottom-panel.js";
import "./app.css";

function App() {
  //имитация получения данных с сервера
  const data = [
    { label: "Первый", important: false, id: "dsfdf" },
    { label: "Второй", important: true, id: "sdfsf" },
    { label: "Третий", important: false, id: "fdsf" },
  ];

  //в компонент ListGroup передаем объекты постов с сервера (массив data)
  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <ListGroup posts={data} />
      <BottomPanel />
    </div>
  );
}

export default App;
