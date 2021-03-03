import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Canal from '../pages/Canal';
import Video from '../pages/Video';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/canal" component={Canal} />
    <Route exact path="/video" component={Video} />
  </Switch>
);

export default Routes;
