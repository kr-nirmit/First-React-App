import React, { Component } from 'react'
import CounterHOC from './CounterHOC'

class HoverCounter extends Component {

    render() {
        return (
            <div>
                <h3 onMouseOver={this.props.incrementCount}>Hover {this.props.count}</h3>
            </div>
        )
    }
}

// export default CounterHOC(HoverCounter, 5)

export default HoverCounter