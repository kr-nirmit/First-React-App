import React, { Component } from 'react'
import ComponentB from './ComponentB'
import UserContext, { UserConsumer } from './Context'

class ComponentA extends Component {

    setFname = fname => {
        this.setState({ fname })
    }
    state = {
        fname: 'Nirmit',
        setFname: this.setFname
    }

    render() {
        const message = this.context
        return (
            <div>
                Component A
                <UserContext.Provider value={this.state}>
                    <ComponentB />
                </UserContext.Provider>
            </div>
        )
    }
}
ComponentA.contextType = UserContext
export default ComponentA
