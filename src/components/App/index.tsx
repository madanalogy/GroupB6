import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Demo from '../Demo';
import Review from '../Review';

function App() {
  return (
    <Router>
      <Switch>
        {/* Remove the demo route if your app is ready! */}
        <Route path='/demo' component={Demo} />

        {/* Create your app routes here  */}
        <Route path='/' component={Review} />
        
      </Switch>
    </Router>
  );
}

export default hot(App);
