import React, { Component } from 'react'
import MemoComp from './MemoComp';
import PureComp from './PureComp';
import RegComp from './RegComp';

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Nirmit Thummar'
        }
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Nirmit'
            })
        }, 2000);
    }
    

    render() {
        console.log('** Parent Component render **');
        console.log(`${this.state.name}`);
        return (
            <div>
                Parent Component
                {/* <RegComp name={this.state.name} /> */}
                {/* <PureComp name={this.state.name} /> */}
                <MemoComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp
