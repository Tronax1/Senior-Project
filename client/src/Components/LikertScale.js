import React, { Component } from 'react'

export default class LikertScale extends Component {
    render() {
        return (
            <div>
                <form>
                    <label for="Lowest">Lowest</label>
                    <label for="Lower">Lower</label>
                    <label for="Low">Low</label>
                    <label for="Medium">Medium</label>
                    <label for="High">High</label>
                    <input name="Scale" type="radio" value="Lowest"/>
                    <input name="Scale" type="radio" value="Lower"/>
                    <input name="Scale" type="radio" value="Low"/>
                    <input name="Scale" type="radio" value="Medium"/>
                    <input name="Scale" type="radio" value="High"/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
