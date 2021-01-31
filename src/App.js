import React, { Component } from "react";
import Done from "./components/Done";
import Form from "./components/form";

class Todo extends Component {
  state = { todos: [] };
  addTodo = (newTodo) => {
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  dataDelete = (current) => {
    console.log(current);
    const filtered=this.state.todos.filter((todo) => todo.id !== current);
    console.log(filtered)
    this.setState({todos:filtered});
  };
  render() {
    const { todos } = this.state;
    return (
      <div className="container">
        <p>You have {this.state.todos.length} </p>
        {todos.map((todo, index) => (
          <Done key={index} id={index} onDelete={this.dataDelete} val={todo} />
        ))}
        <Form onAdd={this.addTodo} />
      </div>
    );
  }
}

export default Todo;
