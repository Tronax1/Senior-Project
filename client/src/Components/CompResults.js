import React, { Component } from 'react'
import { connect } from 'react-redux' 
import { fetchResults } from '../actions'

import '../Styles/CompResults.scss'

function Comparisons(props){
    return (
        <div className="Comparison-Element">
            <div>ID1: {props.OID1}</div>
            <div>ID2: {props.OID2}</div>
            <div>Result:  {props.Result}</div>
            <div>User: {props.User}</div>
            <div>Date: {props.time}</div>
        </div>
    );
}

class CompResults extends Component {
    componentDidMount(){
        this.props.fetchResults();
    }
    render() {
        if(this.props.comparisons != null){
            console.log(this.props.comparisons.data);
            const allResults = this.props.comparisons.data;
            const renderResults = allResults.map((items, i) => (
                <Comparisons key={i} OID1={items.ID1} OID2={items.ID2}
                    User={items.user} Result={items.result} time={items.date} />
            ))
            return (
                <div className="Comparison-Flex">
                    {renderResults}
                </div>
            )
        }
        else{
            return null;
        }
    }
}
function mapStatetoProps({comparisons}){
    return {comparisons};
}
export default connect(mapStatetoProps, {fetchResults})(CompResults);
