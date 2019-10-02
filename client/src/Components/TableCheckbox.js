import React, { Component } from 'react'
import Tables from './Tables'
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
    }

    render() {
        //console.log(this.state)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
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

                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
export default connect(null, {getTables})(TableCheckbox);