import React, { Component } from "react";
import "./Todo.css";
export default class Todo extends Component {
  completeTodo = (id) => {
    this.props.completeTodo(id);
  };

  deleteTodo = (id) => {
    this.props.deleteTodo(id);
  };
  render() {
    return (
      <div className="todo">
        <p
          style={{
            textDecoration: this.props.todo.completed ? "line-through" : "",
          }}
        >
          {this.props.todo.name}
        </p>
        <div className="status">
          <button
            className="completed"
            onClick={() => this.completeTodo(this.props.todo.id)}
          >
            {this.props.todo.completed ? "Reinitialize Todo" : "Todo Completed"}
          </button>
          <button
            className="remove"
            onClick={() => this.deleteTodo(this.props.todo.id)}
          >
            X
          </button>
        </div>
      </div>
    );
  }
}
