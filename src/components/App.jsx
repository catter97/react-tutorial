import React, { Component } from 'react';
import TodoList from 'components/TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{
        id: 1,
        text: 'Running',
        completed: false,
      }, {
        id: 2,
        text: 'Homework',
        completed: true,
      }],
    };
  }

  render() {
    const { todos } = this.state;
    const toggleCompleted = (id) => {
      const t = todos.map(todo => (
        todo.id !== id ? todo : Object.assign({}, todo, { completed: !todo.completed })));
      this.setState({ todos: t });
    };
    return (
      <div>
        <h1>Todo</h1>
        <TodoList todos={todos} onClick={toggleCompleted} />
      </div>
    );
  }
}

export default App;
