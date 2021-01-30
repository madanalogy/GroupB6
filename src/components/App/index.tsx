import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Demo from '../Demo';
import Review from '../Review';

import Home from 'screens/Home';

function App() {
  return (
    <Router>
      <Switch>
        {/* Remove the demo route if your app is ready! */}
        <Route path='/demo' component={Demo} />

        <Route path='/review' component={Review} />
        
      </Switch>
    </Router>
  );
}

export default hot(App);
