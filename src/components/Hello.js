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

// Class Destructuring
// class Hello extends Component{
//     render(){
//         const{fname,sname} = this.props
//         return(
//             <div>
//                 <h1>Hello {fname} {sname}...</h1>
//             </div>
//         ) 
            
//     }
// }

// const Hello = props => {
//     return(
//         <div>
//             <h1>Hello {props.fname} {props.sname}...</h1>
//             {props.children}
//         </div>
//     )
// }

// Element Destructuring
// const Hello = ({fname, sname}) => {
//     return(
//         <div>
//             <h1>Hello {fname} {sname}...</h1>
//         </div>
//     )
// }

// Function Destructuring
// const Hello = props => {
//     const {fname , sname} = props
//     return(
//         <div>
//             <h1>Hello {fname} {sname}...</h1>
//         </div>
//     )
// }
    

export default Hello