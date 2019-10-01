import React, { Component } from 'react'
import Tables from './Tables'

export default class TableCheckbox extends Component {
    constructor(props){
        super(props);
        this.state = Tables;
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <form>
                    <input type="checkbox" id="OID" name="OID" value={true}/>
                    <label for="OID">OID</label>
                </form>
            </div>
        )
    }
}
