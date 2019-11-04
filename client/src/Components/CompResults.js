import React, { Component } from 'react'
import { connect } from 'react-redux' 
import { fetchResults, fetchPreviousSelected, fetchCSV } from '../actions'
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
            <button onClick={() => {
                props.fetchPrev(props.OID1, props.OID2, props.previousFields)
                props.modalShow(props.OID1, props.OID2, props.previousFields, props.User)}
                }>EDIT</button>
        </div>
    );
}

class CompResults extends Component {
    constructor(props){
        super(props);
        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            show: false,
            OID1: '',
            OID2: '',
            PreviousFields: '',
            User: '',
            dateOne: '',
            dateTwo: ''
        }
    }
    showModal(id1, id2, result, user){
        this.setState({
            show: true,
            OID1: id1,
            OID2: id2,
            PreviousFields: result,
            User: user
        });
    }
    closeModal(){
        this.setState({
            show: false
        })
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.fetchCSV(this.props.user, this.state.dateOne, this.state.dateTwo);
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
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
            const allResults = this.props.comparisons.data;
            const renderResults = allResults.map((items, i) => (
                <Comparisons key={i} OID1={items.ID1} OID2={items.ID2}
                    User={items.user} Result={items.result} time={items.date} 
                    modalShow={this.showModal} previousFields={items.selectedFields}
                    fetchPrev={this.props.fetchPreviousSelected}/>
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
                        <form onSubmit={this.handleSubmit}>
                            <input type="date" name="dateOne" onChange={this.handleChange}/>
                            <input type="date" name="dateTwo" onChange={this.handleChange}/>
                            <input type="submit" className="Export-csv"/>    
                        </form>     
                    </div>
                    <Modal show={this.state.show} hideModal={this.closeModal} compareData={this.state}/>
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
export default connect(mapStatetoProps, { fetchResults, fetchPreviousSelected, fetchCSV})(CompResults);
