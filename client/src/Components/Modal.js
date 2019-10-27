import React, { Component } from 'react'

import '../Styles/Modal.scss'

export default class Modal extends Component {
    render() {
        if(!this.props.show){
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
                        <div className="Modal-Body" />
                    </div>
                </>
            )
        }
    }
}
