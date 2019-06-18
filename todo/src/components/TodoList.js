import React from "react";
import { connect } from "react-redux";

import { addNewTodo } from "../actions";

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

  //   toggleTodo = (e, index) => {
  //     e.preventDefault();
  //     this.props.toggleTodo(index);
  //   };

  render() {
    return (
      <React.Fragment>
        <div className="todo-list">
          {this.props.todos.map((todo, index) => (
            <h4 key={index}>
              {todo.todo}
              {todo.completed}
            </h4>
          ))}
        </div>
        <input
          type="text"
          value={this.state.newTodo}
          onChange={this.handleChanges}
          placeholder="Add new Todo"
        />
        <button onClick={this.addTodo}>Add Todo</button>
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
  { addNewTodo }
)(TodoList);
