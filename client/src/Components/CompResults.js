import React, { Component } from 'react'
import { connect } from 'react-redux' 
import { fetchResults } from '../actions'
import Modal from './Modal'

import '../Styles/CompResults.scss'

function Comparisons(props){
    return (
        <div className="Comparison-Element">
            <div>{props.OID1}</div>
            <div>{props.OID2}</div>
            <div>{props.Result}</div>
            <div>{props.User}</div>
            <div>{props.time}</div>
            <button onClick={()=>props.modalShow(props.OID1, props.OID2, props.previousFields)}>EDIT</button>
        </div>
    );
}

class CompResults extends Component {
    constructor(props){
        super(props);
        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.state = {
            show: false,
            OID1: '',
            OID2: '',
            selected: ''
        }
    }
    showModal(id1, id2, previousSelectedFields){
        this.setState({
            show: true,
            OID1: id1,
            OID2: id2,
            selected: previousSelectedFields
        });
    }
    closeModal(){
        this.setState({
            show: false
        })
    }
    componentDidMount(){
        const User = {
            user: this.props.user
        }
        this.props.fetchResults(User);
    }
    render() {
        if(this.props.comparisons != null){
            //console.log(this.props.comparisons.data);
            const allResults = this.props.comparisons.data;
            const renderResults = allResults.map((items, i) => (
                <Comparisons key={i} OID1={items.ID1} OID2={items.ID2}
                    User={items.user} Result={items.result} time={items.date} 
                    modalShow={this.showModal} previousFields={items.selectedFields}/>
            ))
            return (
                <>
                    <div className="Comparison-Flex">
                        <div className="Top-Row">
                            <div>ID1</div>
                            <div>ID2</div>
                            <div>Result</div>
                            <div>User</div>
                            <div>Time</div>
                        </div>
                        <div className="All-Results">
                            {renderResults}
                        </div>     
                    </div>
                    <Modal show={this.state.show} hideModal={this.closeModal}/>
                </>
            )
        }
        else{
            return null;
        }
    }
}
function mapStatetoProps({user, comparisons}){
    return {user, comparisons};
}
export default connect(mapStatetoProps, {fetchResults})(CompResults);
