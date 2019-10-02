import React, { Component } from 'react'
import LikertScale from "./LikertScale"
import Ticket from "./Ticket"

import '../Styles/TicketPage.css'

export default class TicketPage extends Component {
    render() {
        return (
            <div className="Ticket-Structure">
                <Ticket/>
                <Ticket/>
                <LikertScale/>                
            </div>
        )
    }
}
