import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AddTodo from 'components/AddTodo';
import TodoList from 'components/TodoList';

const App = ({ todos }) => (
  <div>
    <h1>Todo</h1>
    <AddTodo />
    <TodoList todos={todos} />
    <br />
    <Link to="/login">Login</Link>
  </div>
);

App.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

export default connect(state => ({ todos: state.todos }))(App);
