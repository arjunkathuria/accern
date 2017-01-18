import React from 'react';
import ReactRouter from 'react-router';

import {Router, Route, IndexRoute} from ReactRouter;

import Main from '../containers/Main';

let routes = (
  <Router>
    <Route path='/' component={Main}></Route>
  </Router>
);

export default routes;
