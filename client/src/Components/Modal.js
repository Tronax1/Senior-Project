import React, { Component } from 'react'
import { connect } from 'react-redux'

import '../Styles/Modal.scss'

class Modal extends Component {
    render() {
        if(!this.props.show || this.props.previousTickets === null){
            return null;
        }
        else{
            console.log(this.props.previousTickets.data);
            return (
                <>
                    <div className="Modal-bg"></div>
                    <div className="Modal-Content">
                        <div className="Modal-Header">
                            <span className="Close-btn" onClick={this.props.hideModal}>x</span>
                        </div>
                        <div className="Modal-Body" >
                            {this.props.previousTickets.data[0].OID}
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
