import React, { Component } from 'react'
import { connect } from 'react-redux' 

import '../Styles/CompResults.scss'

function Comparisons(props){
    return (
        <div className="Comparison-Element">
            
        </div>
    );
}

class CompResults extends Component {
    render() {
        return (
            <div className="Comparison-Flex">
                <Comparisons/>
            </div>
        )
    }
}
export default connect()(CompResults);
