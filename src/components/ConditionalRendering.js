import React, { Component } from 'react'

class ConditionalRendering extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             logging: true
        }
    }
    
    render() {
        
        if(this.state.logging)
            return <div>Welcome Back...</div>
        else
            return <div>Please Login...</div>
    }
}

export default ConditionalRendering
