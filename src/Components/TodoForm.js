import React, { Component } from "react";
import "./TodoForm.css";
export class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todotext: "",
    };
  }

  addTodo = (e) => {
    e.preventDefault();
    this.props.addTodo({ name: this.state.todotext, completed: false });
    this.setState({ todotext: "" });
  };

  render() {
    return (
      <form className="todoform" onSubmit={this.addTodo}>
        <input
          type="text"
          value={this.state.todotext}
          onChange={(e) => this.setState({ todotext: e.target.value })}
          placeholder="Add your Todo here..."
        />
      </form>
    );
  }
}

export default TodoForm;
