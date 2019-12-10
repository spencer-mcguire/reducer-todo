export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  }
];

const AddTodo = todo => {
  return {
    item: todo,
    complete: false,
    id: Date.now()
  };
};

export const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "ADD_TO_LIST":
      return [...state, AddTodo(action.payload)];

    default:
      return state;
  }
};
