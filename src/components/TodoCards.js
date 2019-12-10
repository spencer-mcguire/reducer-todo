import React from "react";

export const TodoCards = props => {
  const { item } = props.i;
  return (
    <div>
      <h3>{item}</h3>
    </div>
  );
};
