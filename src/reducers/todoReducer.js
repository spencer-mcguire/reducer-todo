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
    completed: false,
    id: Date.now()
  };
};

export const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "ADD_TO_LIST":
      return [...state, AddTodo(action.payload)];

    case "MARK_COMPLETE":
      return state.map(i => {
        console.log(i.id, action.payload.id);
        if (i.id === action.payload.id) {
          return { ...i, completed: !i.completed };
        } else {
          return i;
        }
      });

    default:
      return state;
  }
};
