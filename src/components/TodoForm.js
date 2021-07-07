import React, { useState } from "react";
import styled from "styled-components";

// styled Components

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

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
    <Container>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <label name="newItem">Task</label>
          <input
            type="text"
            name="newItem"
            value={newItem}
            placeholder="Enter A New Task..."
            onChange={handleChange}
          />
        </div>
        <button
          onClick={() => dispatch({ type: "ADD_TO_LIST", payload: newItem })}
        >
          ADD
        </button>
        <button onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}>
          Clear
        </button>
      </form>
    </Container>
  );
};
