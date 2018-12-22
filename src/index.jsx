import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const todoData = ['Running', 'Homework'];

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo => <li>{todo}</li>)}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.string.isRequired,
};

ReactDOM.render(
  <div>
    <TodoList todos={todoData} />
  </div>,
  document.getElementById('root'),
);
