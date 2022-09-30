import AppHeader from "../app-header/app-header.js";
import SearchPanel from "../search-panel/search-panel.js";
import PostStatusFilter from "../post-status-filter/post-status-filter.js";
import ListGroup from "../list-group/list-group.js";
import BottomPanel from "../bottom-panel/bottom-panel.js";
import "./app.css";

function App() {
  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <ListGroup />
      <BottomPanel />
    </div>
  );
}

export default App;
