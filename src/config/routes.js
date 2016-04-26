import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../containers/app';
import Home from '../containers/home';
// import Flow from '../containers/flow';
import NoMatch from '../components/no-match/';

export default (
  <Route>
    <Route path="/" component={App}>
    </Route>
    <Route path="*" status={404} component={NoMatch} />
  </Route>
);
