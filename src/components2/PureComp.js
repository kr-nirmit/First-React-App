import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {
        console.log('Pure Component render');
        console.log(`${this.props.name}`);
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

export default PureComp
