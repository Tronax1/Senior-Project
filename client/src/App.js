import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Login from './Components/Login'
import TicketPage from './Components/TicketPage'
import NavBar from './Components/NavBar/NavBar'
import TableCheckbox from './Components/TableCheckbox'

function App() {
  return (
    <>
      <NavBar/>
      <Switch>
          <Route path="/" component={Login} exact/>
          <Route path="/Tickets" component={TicketPage}/>
          <Route path="/TableSelection" component={TableCheckbox}/>
      </Switch>
    </>
  );
}

export default App;
