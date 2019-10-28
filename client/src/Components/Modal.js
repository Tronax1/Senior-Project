import React, { Component } from 'react'
import { connect } from 'react-redux'
import TicketField from './TicketField'

import '../Styles/Modal.scss'

function OldTickets(props){
    console.log(props.theTicket)
    const ticketData = Object.values(props.theTicket);
    const ticketFields = Object.keys(props.theTicket);
    ticketFields.shift();
    ticketData.shift();
    console.log(ticketFields);
    const completeTicket = ticketFields.map((item, i) =>(
        <TicketField key={i} title={item} datas={ticketData[i]} show={true} />
    ))
    return(
        <div className="Ticket">
            {completeTicket}
        </div>
    );
}

class Modal extends Component {
    render() {
        if(!this.props.show || this.props.previousTickets === null){
            return null;
        }
        else{
            console.log(this.props.previousTickets.data[0]);
            return (

                <>
                    <div className="Modal-bg"></div>
                    <div className="Modal-Content">
                        <div className="Modal-Header">
                            <span className="Close-btn" onClick={this.props.hideModal}>x</span>
                        </div>
                        <div className="Modal-Body" >
                            <OldTickets theTicket={this.props.previousTickets.data[0]}/>
                            <OldTickets theTicket={this.props.previousTickets.data[1]} />
                        </div>
                    </div>
                </>
            )
        }
    }
}
function mapStatetoProps({previousTickets}){
    return {previousTickets};
}
export default connect(mapStatetoProps, null)(Modal)
