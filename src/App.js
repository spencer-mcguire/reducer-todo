import React from "react";

import { TodoCards } from "./components/TodoCards";

import "./App.css";

const data = [
  {
    id: 0,
    task: "stuff to do",
    completed: false
  },
  {
    id: 1,
    task: "more stuff to do",
    completed: false
  }
];

function App() {
  return (
    <div className="App">
      <h1>REDUCERS TO DO APP </h1>
      {data.map(i => (
        <TodoCards key={i.id} i={i} />
      ))}
    </div>
  );
}

export default App;
