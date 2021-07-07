import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos";
import "./App.css";
import Header from "./components/layout/header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import uuid from "react-uuid";

class App extends Component {
  state = {
    // this is setting the state for our Todo component
    // array of objects which will be each todo...
    todos: [
      {
        id: uuid(),
        title: "Take out trash",
        completed: false,
      },
      {
        id: uuid(),
        title: "Clean bathroom",
        completed: false,
      },
      {
        id: uuid(),
        title: "Study All the Things",
        completed: false,
      },
    ],
  };

  // toggles Complete for each todo
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

  // delete a todo
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  // adds a todo item
  AddTodo = (title) => {
    const newTodo = { id: uuid(), title: title, completed: false };
    this.setState({ todos: [newTodo, ...this.state.todos] });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <>
                  <AddTodo AddTodo={this.AddTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
