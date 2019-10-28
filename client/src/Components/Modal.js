import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPreviousSelected } from '../actions'

import '../Styles/Modal.scss'

class Modal extends Component {
    componentDidMount(){
        console.log(this.props.ID1);
        this.props.fetchPreviousSelected(this.props.ID1, this.props.ID2, this.props.Selected);
    }
    render() {
        if(!this.props.show){
            return null;
        }
        else{
            console.log(this.props.previousTickets);
            return (
                <>
                    <div className="Modal-bg"></div>
                    <div className="Modal-Content">
                        <div className="Modal-Header">
                            <span className="Close-btn" onClick={this.props.hideModal}>x</span>
                        </div>
                        <div className="Modal-Body" >
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
export default connect(mapStatetoProps, {fetchPreviousSelected})(Modal)
