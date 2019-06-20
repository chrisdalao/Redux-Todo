import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import TodoList from "./components/TodoList";
import rootReducer from "./reducers";
import "./App.css";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById("root")
);
