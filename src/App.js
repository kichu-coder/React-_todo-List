import "./App.css";
import Todo from "./Components/Todo";

import React, { Component } from "react";
import TodoForm from "./Components/TodoForm";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 1, name: "First Todo", completed: true },
        { id: 2, name: "Second Todo", completed: false },
        { id: 3, name: "Third Todo", completed: false },
      ],
    };
  }

  addTodo = (todo) => {
    todo.id = this.state.todos.length + 1 || 0;
    let todoList = [...this.state.todos, todo];
    this.setState({ todos: todoList });
  };

  completeTodo = (id) => {
    let todoList = [...this.state.todos];
    const index = todoList.findIndex((todo) => todo.id === id);
    todoList[index].completed = !todoList[index].completed;
    this.setState({ todos: todoList });
  };

  deleteTodo = (id) => {
    console.log(id);
    let todoList = [...this.state.todos];
    const index = todoList.findIndex((todo) => todo.id === id);
    todoList.splice(index, 1);
    this.setState({ todos: todoList });
  };

  render() {
    return (
      <div className="App">
        <div className="developer">
          <span>Developer</span>
          <br />
          <p>Kishore Pantra</p>
        </div>
        <h1 className="header">Todo React Component</h1>
        <div className="todos">
          {this.state.todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              completeTodo={this.completeTodo}
              deleteTodo={this.deleteTodo}
            />
          ))}
        </div>
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}
