import React, { Component } from 'react'
import LikertScale from "./LikertScale"
import Ticket from "./Ticket"
import { connect } from "react-redux"
import { randomTicket } from "../actions"
import '../Styles/TicketPage.scss'



class TicketPage extends Component {
    render() {
        if(this.props.tickets == null || this.props.random == null){
            return null;
        }
        else{
            return (
                <div className="Ticket-Structure">
                    <div>
                        <LikertScale ticketOne={this.props.tickets.data[this.props.random.num1]} 
                        ticketTwo={this.props.tickets.data[this.props.random.num2]}/>
                    </div>   
                    <div className="Ticket-Data">
                        
                        <Ticket ticketData = {this.props.tickets.data[this.props.random.num1]}/>
                        <Ticket ticketData = {this.props.tickets.data[this.props.random.num2]}/>
                    </div>             
                </div>
            )
        }
    }
}
function mapStatetoProps({tickets, random}){
    return {tickets, random};
}
export default connect(mapStatetoProps, { randomTicket })(TicketPage);