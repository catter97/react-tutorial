import React from 'react';
import { Switch, Route } from 'react-router';
import App from 'components/App';
import Login from 'components/Login';

const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/login" component={Login} />
  </Switch>
);

export default AppRouter;
