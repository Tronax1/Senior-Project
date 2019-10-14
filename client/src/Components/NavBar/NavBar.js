import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from '../../actions'
import { withRouter } from 'react-router-dom'
import { fetchUser } from '../../actions'

import '../../Styles/NavBar.scss'

class NavBar extends Component {
    render() {
        if(!this.props.user){
           return null;
        }
        return (
            <div className="NavBar">
                <div className="Nav-Flex">
                    <NavLink className="Links" to="/User/Tickets">Tickets</NavLink>
                    <NavLink className="Links" to="/User/TableSelection">Checkbox</NavLink>
                    <NavLink className="Links" to="/User/Results">Comparisons</NavLink>
                    <button onClick={()=>{
                        this.props.logOut();
                        this.props.fetchUser();
                        this.props.history.push("/");
                    }}>Logout</button>    
                </div>         
            </div>
        )
    }
}
function mapStatetoProps({user}){
    return {user};
}
export default withRouter(connect(mapStatetoProps, {logOut, fetchUser})(NavBar));