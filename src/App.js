import "./App.css";
import Todo from "./Components/Todo";
import React, { Component } from "react";
import TodoForm from "./Components/TodoForm";
import PopUp from "./Components/PopUp";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 1, name: "First Todo", completed: true },
        { id: 2, name: "Second Todo", completed: false },
        { id: 3, name: "Third Todo", completed: false },
      ],
      popup: {
        task: "",
        triggered: false,
        text: "",
        ok: false,
        id: null,
      },
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

  requestDeleteTodo = (id, popup) => {
    let pop = { ...this.state.popup };
    pop.text = `${popup.text} of task id ${id}`;
    pop.triggered = !this.state.popup.triggered;
    pop.task = "delete";
    pop.id = id;
    this.setState({ popup: pop });
  };
  popupResponse = (val) => {
    if (val === "yes" && this.state.popup.task === "delete") {
      let todoList = [...this.state.todos];
      const index = todoList.findIndex(
        (todo) => todo.id === this.state.popup.id
      );
      todoList.splice(index, 1);
      this.setState({ todos: todoList });
    }
    let pop = { ...this.state.popup };
    pop.triggered = !this.state.popup.triggered;
    this.setState({ popup: pop });
  };

  render() {
    return (
      <div className="App">
        <PopUp
          triggered={this.state.popup.triggered}
          text={this.state.popup.text}
          popupResponse={this.popupResponse}
        />
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
              deleteTodo={this.requestDeleteTodo}
            />
          ))}
        </div>
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}
