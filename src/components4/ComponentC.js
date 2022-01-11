import React, { Component } from 'react'
import UserContext, { UserConsumer } from './Context'

class ComponentC extends Component {

    static contextType = UserContext

    render() {
        return (
            <>
                <div>
                    Component C
                </div>
                {/* <UserConsumer>
                    {(username) => {
                        return <div>Hello {username}</div>
                    }}
                </UserConsumer> */}
                <div>
                    Hello {this.context}
                </div>
            </>
        )
    }
}
// ComponentC.contextType = UserContext

export default ComponentC
