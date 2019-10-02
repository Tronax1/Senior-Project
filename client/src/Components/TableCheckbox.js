import React, { Component } from 'react'
import Tables from './Tables'
import tableNames from './tableNames'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { getTables } from '../actions'

class TableCheckbox extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = Tables;
    }
    handleChange(e){
        this.setState({
            [e.target.name]: true
        })
    }
    handleSubmit(e){
        e.preventDefault();
        const selectedTables = this.state;
        this.props.getTables(selectedTables);
        this.props.history.push("Tickets");
    }

    render() {
        const allTheTables = tableNames;
        const renderTables = allTheTables.map(names=>(
            <>
                <input type="checkbox" id={names} name={names} value={true} onChange={this.handleChange}/>
                <label for={names}>{names}</label>
            </>
        ))
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {renderTables}
                    {/*
                    <input type="checkbox" id="OID" name="OID" value={true} onChange={this.handleChange}/>
                    <label for="OID">OID</label>

                    <input type="checkbox" id="InstanceOperations" name="InstanceOperations" value={true} onChange={this.handleChange}/>
                    <label for="InstanceOperations">InstanceOperations</label>

                    <input type="checkbox" id="Creator" name="Creator" value={true} onChange={this.handleChange}/>
                    <label for="Creator">Creator</label>

                    <input type="checkbox" id="CreatedDateTime" name="CreatedDateTime" value={true} onChange={this.handleChange}/>
                    <label for="CreatedDateTime">CreatedDateTime</label>

                    <input type="checkbox" id="LastModifiedDateTime" name="LastModifiedDateTime" value={true} onChange={this.handleChange}/>
                    <label for="LastModifiedDateTime">LastModifiedDateTime</label>

                    <input type="checkbox" id="EditorLayout" name="EditorLayout" value={true} onChange={this.handleChange}/>
                    <label for="EditorLayout">EditorLayout</label>

                    <input type="checkbox" id="OwningOrganization" name="OwningOrganization" value={true} onChange={this.handleChange}/>
                    <label for="OwningOrganization">OwningOrganization</label>

                    <input type="checkbox" id="LastModifiedBy" name="LastModifiedBy" value={true} onChange={this.handleChange}/>
                    <label for="LastModifiedBy">LastModifiedBy</label>

                    <input type="checkbox" id="LastAccessedBy" name="LastAccessedBy" value={true} onChange={this.handleChange}/>
                    <label for="LastAccessedBy">LastAccessedBy</label>

                    <input type="checkbox" id="SubmitDate" name="SubmitDate" value={true} onChange={this.handleChange}/>
                    <label for="SubmitDate">SubmitDate</label>

                    <input type="checkbox" id="AttachmentCount" name="AttachmentCount" value={true} onChange={this.handleChange}/>
                    <label for="AttachmentCount">AttachmentCount</label>

                    <input type="checkbox" id="OwningTeam" name="OwningTeam" value={true} onChange={this.handleChange}/>
                    <label for="OwningTeam">OwningTeam</label>

                    <input type="checkbox" id="AllInSequenceMustApprove" name="AllInSequenceMustApprove" value={true} onChange={this.handleChange}/>
                    <label for="AllInSequenceMustApprove">AllInSequenceMustApprove</label>

                    <input type="checkbox" id="ApprovalPhaseName" name="ApprovalPhaseName" value={true} onChange={this.handleChange}/>
                    <label for="ApprovalPhaseName">ApprovalPhaseName</label>

                    <input type="checkbox" id="Approved" name="Approved" value={true} onChange={this.handleChange}/>
                    <label for="Approved">Approved</label>

                    <input type="checkbox" id="CurrentApprovalSequence" name="CurrentApprovalSequence" value={true} onChange={this.handleChange}/>
                    <label for="CurrentApprovalSequence">CurrentApprovalSequence</label>

                    <input type="checkbox" id="CurrentState" name="CurrentState" value={true} onChange={this.handleChange}/>
                    <label for="CurrentState">CurrentState</label>

                    <input type="checkbox" id="VIP" name="VIP" value={true} onChange={this.handleChange}/>
                    <label for="VIP">VIP</label>

                    <input type="checkbox" id="ClosedDateTime" name="ClosedDateTime" value={true} onChange={this.handleChange}/>
                    <label for="ClosedDateTime">ClosedDateTime</label>

                    <input type="checkbox" id="Status" name="Status" value={true} onChange={this.handleChange}/>
                    <label for="Status">Status</label>

                    <input type="checkbox" id="Workflow" name="Workflow" value={true} onChange={this.handleChange}/>
                    <label for="Workflow">Workflow</label>

                    <input type="checkbox" id="BusinessHoursToApply" name="BusinessHoursToApply" value={true} onChange={this.handleChange}/>
                    <label for="BusinessHoursToApply">BusinessHoursToApply</label>

                    <input type="checkbox" id="Sentiment" name="Sentiment" value={true} onChange={this.handleChange}/>
                    <label for="Sentiment">Sentiment</label>

                    <input type="checkbox" id="ActiveTaskOrder" name="ActiveTaskOrder" value={true} onChange={this.handleChange}/>
                    <label for="ActiveTaskOrder">ActiveTaskOrder</label>

                    <input type="checkbox" id="EmailThreadID" name="EmailThreadID" value={true} onChange={this.handleChange}/>
                    <label for="EmailThreadID">EmailThreadID</label>
                    */}
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
export default withRouter(connect(null, {getTables})(TableCheckbox));