import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Watch from './pages/Watch';
import DubMovies from './pages/DubMovies';
import OriginalMovies from './pages/OriginalMovies';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/watch/:movieId" component={Watch} />
      <Route path="/dub/" component={DubMovies} />
      <Route path="/original/" component={OriginalMovies} />
    </Switch>
  )
}