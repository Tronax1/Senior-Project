import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <NavLink to="/Tickets">Tickets</NavLink>
                <NavLink to="/">Login</NavLink>
                <NavLink to="/TableSelection">Checkbox</NavLink>                
            </div>
        )
    }
}