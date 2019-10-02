import React, { Component } from 'react'
import Tables from './Tables'
import tableNames from './tableNames'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { getTables } from '../actions'

function Checkbox(props){
    return(
        <>
            <input  type="checkbox" id={props.name} name={props.name} value={true} onChange={props.Change}/>
            <label htmlFor={props.name}>{props.name}</label>
        </>
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
        this.props.history.push("Tickets");
    }
    
    render() {
        const allTheTables = tableNames;
        const renderTables = allTheTables.map((names, i)=>(
            <Checkbox key={i} name={names} Change={this.handleChange}/>
        ))
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {renderTables}
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default withRouter(connect(null, {getTables})(TableCheckbox));