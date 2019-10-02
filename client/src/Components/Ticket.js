import React, { Component } from 'react'
import TicketField from './TicketField'
import { connect } from 'react-redux'

import '../Styles/Ticket.css'

class Ticket extends Component {
    render() {
        return (
            <div className="Ticket">
                <TicketField show={this.props.table.OID} title="OID"/>
                <TicketField show={this.props.table.InstanceOperations} title="InstanceOperations" />
                <TicketField show={this.props.table.Creator} title="Creator" />
                <TicketField show={this.props.table.CreatedDateTime} title="CreatedDateTime" />
            </div>
        )
    }
}
function mapStatetoProps({table}){
    return {table};
}
export default connect(mapStatetoProps)(Ticket);
