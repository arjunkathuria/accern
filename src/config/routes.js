import React from 'react';
import ReactRouter from 'react-router';
import createHistory from 'history/lib/createHashHistory';

import {Router, Route, IndexRoute} from 'react-router';

import Home from '../pages/Home';
import Main from '../containers/Main';

let routes = (
  <Router history={createHistory()}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

export default routes;
