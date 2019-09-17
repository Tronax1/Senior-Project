import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Login from './Components/Login'
import TicketPage from './Components/TicketPage'

function App() {
  return (
    <Switch>
        <Route path="/" component={Login} exact/>
        <Route path="/Tickets" component={TicketPage}/>
    </Switch>
  );
}

export default App;
