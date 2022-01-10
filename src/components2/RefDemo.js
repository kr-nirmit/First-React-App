import React, { Component } from 'react'

class RefDemo extends Component {
    constructor(props) {
        super(props)

        this.inputRef = React.createRef()
    }
    componentDidMount() {
        this.inputRef.current.focus()
        console.log(this.inputRef);
    }
    clickHandler = () => {
        alert(`Hello ${this.inputRef.current.value}`)
    }

    render() {
        return (
            <div>
                <div>
                    <input type='text' ref={this.inputRef} />
                </div>
                <button onClick = {this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefDemo
