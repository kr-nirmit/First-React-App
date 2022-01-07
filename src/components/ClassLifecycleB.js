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

    shouldComponentUpdate(nextProps, nextState) {
        console.log('LifecycleB shouldComponentUpdate');
        return true
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleB getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('LifecycleB componentDidUpdate');
    }
    
    render() {
        console.log('LifecycleB render');
        return (
            <div>
                <p>LifecycleB</p>
                <p>{this.state.name}</p>
            </div>
        )
    }
}

export default ClassLifecycleB
