import React, { Component } from 'react'
import '../Styles/TicketField.scss'

export default class TicketField extends Component {
    render() {
        if(!this.props.show){
            return null;
        }
        return (
            <div>
                <h2>{this.props.title}</h2>
                <div className="Input-Field">
                    <p>{this.props.datas}</p>
                </div>
               { /*<input className="Input-Field" type="text-area" value={this.props.datas} disabled/>*/}
            </div>
        )
    }
}
