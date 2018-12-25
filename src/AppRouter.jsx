import React from 'react';
import { Switch, Route } from 'react-router';
import AppLayout from 'components/AppLayout';
import App from 'components/App';
import Login from 'components/Login';

const AppRouter = () => (
  <AppLayout>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
    </Switch>
  </AppLayout>
);

export default AppRouter;
