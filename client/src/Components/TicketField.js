import React, { Component } from 'react'

export default class TicketField extends Component {
    render() {
        if(!this.props.show){
            return null;
        }
        return (
            <div>
                <h2>{this.props.title}</h2>
                <input type="text" value={this.props.datas} disabled/>
            </div>
        )
    }
}
