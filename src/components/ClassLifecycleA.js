import React, { Component } from 'react'
import ClassLifecycleB from './ClassLifecycleB';

class ClassLifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Nirmit'
        }
        console.log('LifecycleA Constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps');
        return null
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount');
    }
    
    render() {
        console.log('LifecycleA render');
        return (
            <div>
                {this.state.name}
                <ClassLifecycleB />
            </div>
        )
    }
}

export default ClassLifecycleA
