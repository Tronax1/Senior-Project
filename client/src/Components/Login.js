import React, { Component } from 'react'

import '../Styles/Login.css'

export default class Login extends Component {
    render() {
        return (
            <div>
                <form className="Login-Form">
                    <h1>LOGIN</h1>
                    <input type="email" placeholder="test@example.com" />
                    <input type="password" placeholder="Password" />
                    <input className="Submit-btn" type="submit" value="Login"/>
                </form>
            </div>
        )
    }
}
