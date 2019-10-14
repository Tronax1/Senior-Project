import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Login from './Components/Login'
import TicketPage from './Components/TicketPage'
import NavBar from './Components/NavBar/NavBar'
import TableCheckbox from './Components/TableCheckbox'
import CompResults from './Components/CompResults'
import { connect } from 'react-redux'
import { fetchUser } from './actions'

function NoPage(){
  return <h1 style={{textAlign: "center"}}>404 Not Found</h1>;
}
class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }
  render(){
    return (
      <>
        <NavBar />
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/User/Tickets" component={TicketPage} />
          <Route path="/User/TableSelection" component={TableCheckbox} />
          <Route path="/User/Results" component={CompResults}/>
          <Route component={NoPage} />
        </Switch>
      </>
    );
  }
}

export default connect(null, {fetchUser})(App);
