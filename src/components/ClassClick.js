import React, { Component } from 'react'

export class ClassClick extends Component {
    clickHandler(){
        console.log('Clicked the Button');
    }
    render() {
        return (
            <div>
                <button onClick = {this.clickHandler}>Click Class</button>
            </div>
        )
    }
}

export default ClassClick
