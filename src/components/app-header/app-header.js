import React from "react";
import "./App-header.css";

function AppHeader({ liked, allPosts }) {
  return (
    <div className="app-header d-flex">
      <h1>Artem Frolov</h1>
      <h2>
        {allPosts} записей, из них понравилось {liked}
      </h2>
    </div>
  );
}

export default AppHeader;
