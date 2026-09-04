import React from "react";
import Timer from "./unmount.jsx";
import { useState } from "react";

// class App extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             showTimer: true
//         };
//     }

//     removeTimer = () => {
//         this.setState({
//             showTimer: false
//         });
//     };

//     render() {
//         return (
//             <>
//                 {this.state.showTimer && <Timer />}

//                 <button onClick={this.removeTimer}>
//                     Stop Timer
//                 </button>
//             </>
//         );
//     }
// }

 function App() {

    const [count, setCount] = useState("red");

    function increase() {
        setCount("blue");
    }
    return (
        <>
            <h1>{count}</h1>
            <button onClick={()=>setCount}>
                Increase
            </button>
        </>
    );
}
export default App;