import React from "react";

export const TodoCards = props => {
  const { item, id, completed } = props.i;
  return (
    <div
      onClick={() => props.dispatch({ type: "MARK_COMPLETE", payload: { id } })}
    >
      <h3 className={`${completed ? "completed" : ""}`}>{item}</h3>
    </div>
  );
};
