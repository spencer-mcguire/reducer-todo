import React from "react";

export const TodoCards = props => {
  const { task } = props.i;
  return (
    <div>
      <h3>{task}</h3>
    </div>
  );
};
