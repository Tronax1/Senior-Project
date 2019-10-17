import React, { Component } from 'react'
import Tables from './Tables'
import tableNames from './tableNames'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { getTables, fetchTickets } from '../actions'

import '../Styles/TableCheckbox.scss'

function Checkbox(props){
    return(
        <div>
            <input  type="checkbox" id={props.name} name={props.name} value={true} onChange={props.Change}/>
            <label htmlFor={props.name}>{props.name}</label>
        </div>
    );
}

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
        this.props.fetchTickets();
        this.props.history.push("Tickets");
    }
    render() {
        //console.log(this.props.tickets.tickets.data);
        const allTheTables = tableNames;
        const renderTables = allTheTables.map((names, i)=>(
            <Checkbox key={i} name={names} Change={this.handleChange}/>
        ))
        return (
            <div>
                <form className="Form-Position" onSubmit={this.handleSubmit}>
                    <h2>All Fields</h2>
                    <div className="Checkboxes">
                        {renderTables}
                    </div>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
function mapStatetoProps(tickets){
    return {tickets};
}
export default withRouter(connect(mapStatetoProps, {getTables, fetchTickets})(TableCheckbox));