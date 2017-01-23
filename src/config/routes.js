import React from 'react';
import ReactRouter from 'react-router';
import createHistory from 'history/lib/createHashHistory';

import {Router, Route, IndexRoute} from 'react-router';

import Home from '../pages/Home';
import Main from '../containers/Main';
import Resources from '../pages/Resources';
import Contact from '../pages/Contact';
import Company from '../pages/Company';

let routes = (
  <Router history={createHistory()}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='resources' component={Resources} />
      <Route path='contact' component={Contact} />
      <Route path='company' component={Company} />
    </Route>
  </Router>
);

export default routes;
