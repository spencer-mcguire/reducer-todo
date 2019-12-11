import React, { useReducer } from "react";

import { initialState, reducer } from "./reducers/todoReducer";

import { TodoCards } from "./components/TodoCards";
import { TodoForm } from "./components/TodoForm";

import "./App.css";

function App() {
  const [itemState, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <header>
        <h1>Daily ToDo</h1>
      </header>
      <TodoForm dispatch={dispatch} />
      {itemState.map(i => (
        <TodoCards dispatch={dispatch} key={i.id} i={i} />
      ))}
    </div>
  );
}

export default App;
