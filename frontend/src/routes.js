import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Watch from './pages/Watch';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/watch/:movieId" component={Watch} />
    </Switch>
  )
}