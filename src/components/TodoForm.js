import React, { useReducer, useState } from "react";
import { reducer, initialState } from "../reducers/todoReducer";

export const TodoForm = () => {
  const [itemState, dispatch] = useReducer(reducer, initialState);
  const [newItem, setNewItem] = useState("");

  const handleChange = e => {
    setNewItem(e.target.value);
  };

  return (
    <form>
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
    </form>
  );
};
