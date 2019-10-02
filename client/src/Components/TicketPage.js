import React, { Component } from 'react'
import LikertScale from "./LikertScale"
import Ticket from "./Ticket"

export default class TicketPage extends Component {
    render() {
        return (
            <div>
                <Ticket/>
                <LikertScale/>  
                <Ticket/>              
            </div>
        )
    }
}
