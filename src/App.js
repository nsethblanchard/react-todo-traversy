import React, { Component } from "react";
import Todos from "./components/Todos";
import "./App.css";

class App extends Component {
  state = {
    // this is setting the state for our Todo component
    // array of objects which will be each todo...
    todos: [
      {
        id: 1,
        title: "Take out trash",
        completed: false,
      },
      {
        id: 2,
        title: "Clean bathroom",
        completed: false,
      },
      {
        id: 3,
        title: "Study All the Things",
        completed: false,
      },
    ],
  };

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
