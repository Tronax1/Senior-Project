import React, { Component } from 'react'
import '../Styles/LikertScale.scss'

export default class LikertScale extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            Scale: ''
        }
    }
    handleChange(e){
        this.setState({
            Scale: e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        let finalScale = this.state.Scale;
        console.log(finalScale);
    }
    render() {
        return (
            <div>
                <form className="Likert-Scale" onSubmit={this.handleSubmit}>
                    <label>
                        <p>Not at all similar</p>
                        <input onChange={this.handleChange} name="Scale" id="Lowest" type="radio" value="Not at all similar"/>
                    </label>
                    <label>
                        <p>Somewhat similar</p>
                        <input onChange={this.handleChange} name="Scale" id="Lower" type="radio" value="Somewhat similar"/>
                    </label>
                    <label>
                        <p>Very similar</p>
                        <input onChange={this.handleChange} name="Scale" id="Low" type="radio" value="Very similar"/>
                    </label>
                    <label>
                        <p>Nearly identical</p>
                        <input onChange={this.handleChange} name="Scale" id="Medium" type="radio" value="Nearly identical"/>
                    </label>
                    <input className="Likert-Submit" type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
