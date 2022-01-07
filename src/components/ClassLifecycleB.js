import React, { Component } from 'react'

class ClassLifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Nirmit'
        }
        console.log('LifecycleB Constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromProps');
        return null
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount');
    }
    
    render() {
        console.log('LifecycleB render');
        return (
            <div>
                {this.state.name}
            </div>
        )
    }
}

export default ClassLifecycleB
