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
            const num = getRandomArbitrary(0,this.props.tickets.data.length - 1);
            const num2 = getRandomArbitrary(0,this.props.tickets.data.length - 1);
            return (
                <div className="Ticket-Structure">
                    <div>
                        <LikertScale ticketOne={this.props.tickets.data[num]} 
                        ticketTwo={this.props.tickets.data[num2]}/>
                    </div>   
                    <div className="Ticket-Data">
                        
                        <Ticket ticketData = {this.props.tickets.data[num]}/>
                        <Ticket ticketData = {this.props.tickets.data[num2]}/>
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

function getRandomArbitrary(min, max) {
    
    return Math.floor(Math.random() * (max - min) + min);
    
  }