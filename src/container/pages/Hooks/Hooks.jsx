import React, { Component, useEffect, useState } from "react";
import "./Hooks.css";

// class Hooks extends Component {
//     state = {
//         count: 0
//     }

//     onUpdate = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }

//     componentDidMount(){
//         document.title = `Title Change: ${this.state.count}`
//     }

//     componentDidUpdate(){
//         document.title = `Title Change: ${this.state.count}`
//     }

//     componentWillUnmount(){
//         document.title = "Latihan React";
//     }

//     render() {
//         return (
//             <div className="p-hooks">
//                 <p>Nilai saya saat ini adalah : {this.state.count}</p>
//                 <button onClick={this.onUpdate}>Update Nilai</button>
//             </div>
//         )
//     }
// }

const Hooks = () => {
    const [count, setCount] = useState(0); // count itu value, setCount itu function nya (useState), (0) itu value awal sebelum dirubah
    
    useEffect(() => {       // useEffect fungsinya sama seperti component lifecycle (DidMount, DidUpdate)
        document.title = `Title Change: ${count}`;
        return () => {
            document.title = "Latihan React"
        }
    })

    return (
        <div className="p-hooks">
            <p>Nilai saya saat ini adalah : {count}</p>
            <button onClick={() => setCount(count + 1)}>Update Nilai</button>
            <button onClick={() => setCount(count - 1)}>Update Nilai</button>
        </div>
    )
}

export default Hooks;