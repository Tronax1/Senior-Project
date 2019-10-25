import React, { Component } from 'react'

import '../Styles/Modal.scss'

export default class Modal extends Component {
    render() {
        return (
            <>
                <div className="Modal-bg"></div>
                <div className="Modal-Content">
                    <div className="Modal-Header">
                        <span className="Close-btn">x</span>
                    </div>
                    <div ClassName="Modal-Body"/>
                </div>
            </>
        )
    }
}
