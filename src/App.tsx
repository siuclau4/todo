import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/TodoList";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>
      <TodoList />
    </div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
