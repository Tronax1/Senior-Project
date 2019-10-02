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
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
export default withRouter(connect(null, {getTables})(TableCheckbox));