import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Login from './Components/Login'

function App() {
  return (
    <Switch>
        <Route path="/" component={Login} exact/>
    </Switch>
  );
}

export default App;
