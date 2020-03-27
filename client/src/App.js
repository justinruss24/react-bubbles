import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './components/Login';
import BubblePage from './components/BubblePage';
import PrivateRoute from './components/PrivateRoute';

import './styles.scss';

function App() {
  return (
    <div className="App">
      <h2>Welcome to the Bubble App</h2>
      
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/bubble-page" component={BubblePage} />
      </Switch>
    </div>
  );
}

export default App;