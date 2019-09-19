import React, { Component } from 'react'

import '../Styles/Ticket.css'

export default class Ticket extends Component {
    render() {
        return (
            <div className="Ticket">
                <h2>Requester info</h2>
                <div>
                    <h3>Requester</h3>
                </div>
                <div>
                    <h3>Email</h3>
                </div>
                <div>
                    <h3>Phone</h3>
                </div>
                <div>
                    <h3>Department name</h3>
                </div>
                <div>
                    <h3>Location name</h3>
                </div>
                <h2>Details</h2>
                <div>
                    <h3>Summary</h3>
                </div>
                <div>
                    <h3>Incident type</h3>
                </div>
                <div>
                    <h3>Priority</h3>
                </div>
                <div>
                    <h3>Urgency</h3>
                </div>
            </div>
        )
    }
}
