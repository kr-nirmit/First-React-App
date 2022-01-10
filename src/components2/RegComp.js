import React, { Component } from 'react'

class RegComp extends Component {
    render() {
        console.log('Regular Component render');
        console.log(`${this.props.name}`);
        return (
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}

export default RegComp
