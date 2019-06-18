import { ADD_NEW_TODO, TOGGLE_TODO, CLEAR_TODO } from "../actions";

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
      if (newTodo.todo !== "") {
        return {
          ...state,
          todos: [...state.todos, newTodo]
        };
      } else {
        alert(`your input is empty!`);
      }
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (action.payload === index) {
            return {
              ...todo,
              completed: !todo.completed
            };
          } else {
            return todo;
          }
        })
      };
    case CLEAR_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.completed === false)
      };
    default:
      return state;
  }
};
