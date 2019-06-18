import { ADD_NEW_TODO } from "../actions";

const initialState = {
  todos: [
    { todo: "Do Laundry", completed: true },
    { todo: "Get Groceries", completed: false }
  ]
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TODO:
      const newTodo = { todo: action.payload, completed: false };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    default:
      return state;
  }
};
