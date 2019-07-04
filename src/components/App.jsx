import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Table, TableBody, TableHead, TableRow, TableCell,
} from '@material-ui/core';
import AddTodo from 'components/AddTodo';
import TodoList from 'components/TodoList';
import * as apiAction from 'actions/apiActions';

class App extends Component {
  state = { movieList: [] };

  componentDidMount() {
    apiAction.spCall({
      p0: 'adm_sel1010',
      p1: '1',
      p2: '10',
      p3: '',
      p4: '',
      p5: '',
      p6: '2019-01-01',
      p7: '2019-06-30',
      p8: '',
      p9: '',
    }).then((body) => {
      const { response } = body;
      this.setState(Object.assign({}, { movieList: response }));
    });
  }

  render() {
    const { todos } = this.props;
    const { movieList } = this.state;
    return (
      <div>
        <h1>Todo</h1>
        <AddTodo />
        <TodoList todos={todos} />
        <br />
        <Link to="/login">Login</Link>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Movie Name</TableCell>
              <TableCell align="center">Image</TableCell>
              <TableCell align="center">YN</TableCell>
              <TableCell align="center">UPD_NM</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              movieList.map((row, idx) => {
                const {
                  MEM_ID, MOV_ID, MOV_SNM, USE_YN, UPD_NM,
                } = row;
                return (
                  <TableRow key={idx}>
                    <TableCell component="th" scope="row">
                      {MOV_SNM}
                    </TableCell>
                    <TableCell>
                      <img width="150" src={`https://s3.ap-northeast-2.amazonaws.com/zamstorage/afimg/Face.${MEM_ID}${MOV_ID}.jpg`} alt="img" />
                    </TableCell>
                    <TableCell align="center">{USE_YN}</TableCell>
                    <TableCell align="center">{UPD_NM}</TableCell>
                  </TableRow>);
              })
            }
          </TableBody>
        </Table>
      </div>
    );
  }
}

App.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

export default connect(state => ({ todos: state.todos }))(App);
