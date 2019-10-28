import React, { Component } from 'react'
import { connect } from 'react-redux'
import TicketField from './TicketField'
import ModalForm from './ModalForm'

import '../Styles/Modal.scss'

function OldTickets(props){
    const ticketData = Object.values(props.theTicket);
    const ticketFields = Object.keys(props.theTicket);
    ticketFields.shift();
    ticketData.shift();
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
            return (
                <>
                    <div className="Modal-bg"></div>
                    <div className="Modal-Content">
                        <div className="Modal-Header">
                            <span className="Close-btn" onClick={this.props.hideModal}>x</span>
                        </div>
                        <div className="Modal-Body">
                            <div>
                                <ModalForm resultData={this.props.compareData} removeModal={this.props.hideModal}/>
                            </div>
                            <div className="Modal-Tickets">
                                <OldTickets theTicket={this.props.previousTickets.data[0]}/>
                                <OldTickets theTicket={this.props.previousTickets.data[1]} />
                            </div>
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
