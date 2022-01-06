import react, {Component} from "react";

class Hello extends Component{
    render(){
        return(
            <div>
                <h1>Hello {this.props.fname} {this.props.sname}...</h1>
            </div>
        ) 
            
    }
}

// const Hello = props => {
//     return(
//         <div>
//             <h1>Hello {props.fname} {props.sname}...</h1>
//             {props.children}
//         </div>
//     )
// } 
    

export default Hello