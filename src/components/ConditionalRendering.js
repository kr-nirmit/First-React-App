import React, { Component } from 'react'

class ConditionalRendering extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             logging: true
        }
    }
    
    render() {
        
        // if(this.state.logging)
        //     return <div>Welcome Back...</div>
        // else
        //     return <div>Please Login...</div>

        // let message
        // if(this.state.logging)
        //     message = <div>Welcome Back...</div>
        // else
        //     message = <div>Please Login...</div>

        //     return <div>{message}</div>

        // return(
        //     this.state.logging ? <div>Welcome Back...</div> : <div>Please Login...</div>
        // )

        return this.state.logging && <div>Welcome Back...</div>
    }
}

export default ConditionalRendering
