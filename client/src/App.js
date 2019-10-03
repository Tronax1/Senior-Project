import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Login from './Components/Login'
import TicketPage from './Components/TicketPage'
import NavBar from './Components/NavBar/NavBar'
import TableCheckbox from './Components/TableCheckbox'

function NoPage(){
  return <h1 style={{textAlign: "center"}}>404 Not Found</h1>;
}
function App() {
  return (
    <>
      <NavBar/>
      <Switch>
          <Route path="/" component={Login} exact/>
          <Route path="/User/Tickets" component={TicketPage}/>
          <Route path="/User/TableSelection" component={TableCheckbox}/>
          <Route component={NoPage}/>
      </Switch>
    </>
  );
}

export default App;
