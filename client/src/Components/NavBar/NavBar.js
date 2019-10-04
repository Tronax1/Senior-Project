import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from '../../actions'
import { withRouter } from 'react-router-dom'

import '../../Styles/NavBar.css'

class NavBar extends Component {
    render() {
        //if(!this.props.user){
         //   return null;
       // }
        return (
            <div className="NavBar">
                <div className="Nav-Flex">
                    <NavLink className="Links" to="/User/Tickets">Tickets</NavLink>
                    <NavLink className="Links" to="/User/TableSelection">Checkbox</NavLink>
                    <button onClick={()=>{
                        this.props.logOut();
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
export default withRouter(connect(mapStatetoProps, {logOut})(NavBar));