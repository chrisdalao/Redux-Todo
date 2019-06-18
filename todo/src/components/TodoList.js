import React from "react";
import { connect } from "react-redux";

import { addNewTodo, toggleTodo } from "../actions";

class TodoList extends React.Component {
  state = {
    newTodo: ""
  };

  handleChanges = e => {
    this.setState({ newTodo: e.target.value });
  };

  addTodo = e => {
    e.preventDefault();
    this.props.addNewTodo(this.state.newTodo);
    this.setState({ newTodo: "" });
  };

  toggleTodo = (e, index) => {
    e.preventDefault();
    this.props.toggleTodo(index);
  };

  render() {
    return (
      <React.Fragment>
        <div className="todo-wrapper">
          {this.props.todos.map((todo, index) => (
            <div
              key={index}
              onClick={e => this.toggleTodo(e, index)}
              className={`toDo ${todo.completed && "completed"}`}
            >
              {todo.todo}
            </div>
          ))}
          <form onSubmit={this.addTodo}>
            <input
              type="text"
              value={this.state.newTodo}
              onChange={this.handleChanges}
              placeholder="Add new Todo"
            />
            <button className="add-btn" onClick={this.addTodo}>
              Add Todo
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todoList.todos
  };
};

export default connect(
  mapStateToProps,
  { addNewTodo, toggleTodo }
)(TodoList);
