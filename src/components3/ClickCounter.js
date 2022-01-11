import React, { Component } from 'react'
import CounterHOC from './CounterHOC'

class ClickCounter extends Component {
    
    render() {
        return (
            <div>
                {/* <button onClick={this.props.incrementCount}>{this.props.name} Click {this.props.count}</button> */}
                <button onClick={this.props.incrementCount}>Click {this.props.count}</button>
            </div>
        )
    }
}

// export default CounterHOC(ClickCounter, 2)

export default ClickCounter
