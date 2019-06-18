import { combineReducers } from "redux";
import { todoReducer as todoList } from "./todoList";

export default combineReducers({
  todoList
});
