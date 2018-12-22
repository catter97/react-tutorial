import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

ReactDOM.render(
  <h1>{_.join(['Hello', 'World'], ' ')}</h1>,
  document.getElementById('root'),
);
