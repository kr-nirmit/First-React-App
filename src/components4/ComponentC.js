import React, { Component } from 'react'
import UserContext from './Context'

class ComponentC extends Component {

    // static contextType = UserContext

    render() {
        console.log(this.context);
        return (
            <div>
                Component C
                <div>
                    <UserContext.Consumer>
                        {({ fname, setFname }) => (
                            <button onClick={() => setFname('Kunal')}>Switch Context (Current: {fname})</button>
                        )}
                    </UserContext.Consumer>
                </div>
                {/* <div>
                    Hello {this.context}
                </div> */}
            </div>
        )
    }
}
ComponentC.contextType = UserContext

export default ComponentC
