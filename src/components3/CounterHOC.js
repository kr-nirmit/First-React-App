import React from 'react'

const CounterHOC = (WrappedComponent, IncrementNumber) => {
    class counterhoc extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }
        incrementCount =()=>{
            this.setState(prevState =>{
                return {
                    count: prevState.count + IncrementNumber
                }
            })
        }
        render(){
            return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount} {...this.props} />
        }
    }
    return counterhoc
}

export default CounterHOC
