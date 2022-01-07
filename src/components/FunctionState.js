import React,{useState} from 'react'

function FunctionState() {
    const [text, setText] = useState('Welcome Visitor');
    
    const changeMessage = () => {
        setText = "Thank you..."
    }
    return (
        <div>
           <h1>{text}</h1>
           <button onClick={changeMessage}>Click</button> 
        </div>
    )
}

export default FunctionState
