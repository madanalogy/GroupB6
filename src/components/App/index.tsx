import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Demo from '../Demo';

import Home from 'screens/Home';
import Review from 'components/Review';

function App() {
  return (
    <Router>
      <Switch>
        {/* Remove the demo route if your app is ready! */}
        <Route path='/demo' component={Demo} />

        {/* Create your app routes here  */}
        <Route path='/' component={Home} />

        <Route path='/review' component={Review} />
        
      </Switch>
    </Router>
  );
}

export default hot(App);
