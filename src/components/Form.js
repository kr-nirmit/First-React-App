import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             fname: ' ',
             lname: ' ',
             address: ' '
        }
    }
    changeFirstName = (event) => {
        this.setState({
            fname: event.target.value
        })
    }
    changeLastName = (event) => {
        this.setState({
            lname: event.target.value
        })
    }
    changeAddress = (event) => {
        this.setState({
            address: event.target.value
        })
    }
    onSubmit = (event) => {
        alert(`Your Name is${this.state.fname}${this.state.lname}.`)
        event.preventDefault()
    }
    
    render() {
        // const {fname, lname, address}= this.state
        return (
            <div>
                <form>
                    <div>
                        <label>First Name : </label>
                        <input type='text' value={this.state.fname} onChange={this.changeFirstName}>
                        </input><br/>
                        <label>Last Name : </label>
                        <input type='text' value={this.state.lname} onChange={this.changeLastName}></input><br/>
                        <label>Address : </label>
                        <textarea type='textarea' value={this.state.address} onChange={this.changeAddress}></textarea>
                        <br/><button onClick={this.onSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form
