import React, { useReducer, useState } from "react";

import { initialState, reducer } from "./reducers/todoReducer";

import { TodoCards } from "./components/TodoCards";
// import { TodoForm } from "./components/TodoForm";

import "./App.css";

function App() {
  const [itemState, dispatch] = useReducer(reducer, initialState);
  const [newItem, setNewItem] = useState("");
  // console.log(itemState);
  const handleChange = e => {
    setNewItem(e.target.value);
  };

  return (
    <div className="App">
      <h1>REDUCERS TO DO APP </h1>
      <input
        type="text"
        name="newItem"
        value={newItem}
        onChange={handleChange}
      />
      <button
        onClick={() => dispatch({ type: "ADD_TO_LIST", payload: newItem })}
      >
        ADD TO DO
      </button>
      {itemState.map(i => (
        <TodoCards key={i.id} i={i} />
      ))}
    </div>
  );
}

export default App;
