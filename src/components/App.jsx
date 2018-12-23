import React, { Component } from 'react';
import AddTodo from 'components/AddTodo';
import TodoList from 'components/TodoList';

class App extends Component {
  state = { id: 0, todos: [] };

  addTodo = (text) => {
    const { id, todos } = this.state;
    const todo = { id: id + 1, text, completed: false };
    const ts = Array.from(todos);
    ts.push(todo);
    this.setState({ id, todos: ts });
  };

  toggleCompleted = (id) => {
    const { todos } = this.state;
    const t = todos.map(todo => (
      todo.id !== id ? todo : Object.assign({}, todo, { completed: !todo.completed })));
    this.setState({ todos: t });
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>Todo</h1>
        <AddTodo addTodo={this.addTodo} />
        <TodoList todos={todos} onClick={this.toggleCompleted} />
      </div>
    );
  }
}

export default App;
