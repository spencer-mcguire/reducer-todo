import React, { useState } from "react";

export const TodoForm = ({ dispatch }) => {
  const [newItem, setNewItem] = useState("");

  const handleChange = e => {
    setNewItem(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setNewItem("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
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
        <button onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}>
          Clear Completed
        </button>
      </form>
    </div>
  );
};
