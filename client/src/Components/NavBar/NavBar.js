import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from '../../actions'
import { withRouter } from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <div>
                <NavLink to="/User/Tickets">Tickets</NavLink>
                <NavLink to="/">Login</NavLink>
                <NavLink to="/User/TableSelection">Checkbox</NavLink>
                <button onClick={()=>{
                    this.props.logOut();
                    this.props.history.push("/");
                }}>Logout</button>             
            </div>
        )
    }
}
export default withRouter(connect(null, {logOut})(NavBar));