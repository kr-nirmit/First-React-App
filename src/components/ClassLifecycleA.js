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

    shouldComponentUpdate(nextProps, nextState) {
        console.log('LifecycleA shouldComponentUpdate');
        return true
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate');
        return null
    }
    

    componentDidUpdate(prevProps, prevState) {
        console.log('LifecycleA componentDidUpdate');
    }
    
    changeState = () => {
        this.setState({
            name: 'Thummar'
        })
    }
    
    render() {
        console.log('LifecycleA render');
        return (
            <div>
                <p>LifecycleA</p>
                <p>{this.state.name}</p>
                <button onClick={this.changeState}>Change State</button>
                <hr></hr>
                <ClassLifecycleB />
            </div>
        )
    }
}

export default ClassLifecycleA
