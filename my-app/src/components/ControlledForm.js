import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            category: 'website',
            comments: '',
        }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleCategoryChange = (event) => {
        this.setState({
            category: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)

    }

    render() {
        return (
            <div>
                <h2>Please fill out the form below:</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='id-name'>Your name:</label>
                        <input
                            value={this.state.name}
                            onChange={this.handleNameChange}
                            id="id-name"
                            name="name"
                            type="text" />
                    </div>
                    <div>
                        <label htmlFor='id-category'>Query category:</label>
                        <select
                            value={this.state.category}
                            onChange={this.handleCategoryChange}
                            id="id-category"
                            name="category">
                            <option value="website">Website Issue</option>
                            <option value="order">Order Issue</option>
                            <option value="general">General inquiry</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='id-comments'>Comments:</label>
                        <textarea
                            id="id-comments" 
                            name="comments"
                            value={this.state.comments}
                            onChange={this.handleCommentsChange} />
                    </div>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default ControlledForm