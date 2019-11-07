import React, { Component } from 'react'
import { connect } from 'react-redux' 
import { fetchResults, fetchPreviousSelected, fetchCSV, deleteResult } from '../actions'
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
            <button className="Edit-btn" onClick={() => {
                props.fetchPrev(props.OID1, props.OID2, props.previousFields)
                props.modalShow(props.OID1, props.OID2, props.previousFields, props.User)}
                }>EDIT
            </button>
            <button className="Delete-btn" onClick={()=>{
                props.deleteEntry(props.deleteId);
                props.deletedFunction();
            }}>
                DELETE
            </button>
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
        this.updateDeleted = this.updateDeleted.bind(this);
        this.state = {
            show: false,
            OID1: '',
            OID2: '',
            PreviousFields: '',
            User: '',
            dateOne: '',
            dateTwo: '',
            selectedExport: "Current",
            total: []
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
        const exportData = {
            user: this.props.user,
            dateOne: this.state.dateOne,
            dateTwo: this.state.dateTwo,
            selectedExport: this.state.selectedExport
        }
        this.props.fetchCSV(exportData);
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    async updateDeleted(){
        const User = {
            user: this.props.user
        }
        await this.props.fetchResults(User);
        if (this.props.comparisons != null) {
            const allResults = this.props.comparisons.data;
            this.setState({
                total: allResults
            });
        }
    }
    async componentDidMount(){
        const User = {
            user: this.props.user
        }
        await this.props.fetchResults(User);
        if (this.props.comparisons != null) {
            const allResults = this.props.comparisons.data;
            this.setState({
                total: allResults
            });
        }
    }
    render() {
        
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
                            {this.state.total.map((items, i) => (
                                <Comparisons key={i} OID1={items.ID1} OID2={items.ID2}
                                    User={items.user} Result={items.result} time={items.date}
                                    modalShow={this.showModal} previousFields={items.selectedFields}
                                    fetchPrev={this.props.fetchPreviousSelected} deleteId={items._id}
                                    deleteEntry={this.props.deleteResult} deletedFunction={this.updateDeleted}/>
                            ))}
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <input type="date" name="dateOne" onChange={this.handleChange} required/>
                            <input type="date" name="dateTwo" onChange={this.handleChange} required/>
                            <select onChange={this.handleChange} name="selectedExport" required>
                                <option value="Current">Current User</option>
                                <option value="All">All</option>
                            </select>
                            <input type="submit" className="Export-csv" value="Export CSV"/>    
                        </form>     
                    </div>
                    <Modal show={this.state.show} hideModal={this.closeModal} compareData={this.state}/>
                </>
            )
    }
}
function mapStatetoProps({user, comparisons}){
    return {user, comparisons};
}
export default connect(mapStatetoProps, { fetchResults, fetchPreviousSelected, fetchCSV, deleteResult})(CompResults);
