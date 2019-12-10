import React, { useState } from "react";

export const TodoForm = ({ dispatch }) => {
  const [newItem, setNewItem] = useState("");

  const handleChange = e => {
    setNewItem(e.target.value);
  };

  return (
    <div>
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
    </div>
  );
};
