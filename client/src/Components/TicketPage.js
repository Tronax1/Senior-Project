import React, { Component } from 'react'
import LikertScale from "./LikertScale"
import Ticket from "./Ticket"
import { connect } from "react-redux"
import { fetchTickets } from "../actions"

import '../Styles/TicketPage.scss'

class TicketPage extends Component {
    componentDidMount(){
        this.props.fetchTickets();
    }
    render() {
        if(this.props.tickets == null){
            return null;
        }
        else{
            return (
                <div className="Ticket-Structure">
                    <div>
                        <LikertScale ticketOne={this.props.tickets.data[0]} 
                        ticketTwo={this.props.tickets.data[1]}/>
                    </div>   
                    <div className="Ticket-Data">
                        <Ticket ticketData = {this.props.tickets.data[0]}/>
                        <Ticket ticketData = {this.props.tickets.data[1]}/>
                    </div>             
                </div>
            )
        }
    }
}
function mapStatetoProps({tickets}){
    return {tickets};
}
export default connect(mapStatetoProps, { fetchTickets })(TicketPage);