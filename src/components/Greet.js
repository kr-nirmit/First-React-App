import React from "react";
import react from "react";

const Greet = () => {
    // // With JSX
    return(
        <div className = "greet">
            <h1>Good Morning...</h1>
        </div>
    )

    // // Without JSX
    // return React.createElement('div',{className: 'greet'},React.createElement('h1','null','Good Morning...'))
}

export default Greet