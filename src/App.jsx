// import React from "react";
// import Timer from "./unmount.jsx";
// import { useState } from "react";

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

//  function App() {

//     const [count, setCount] = useState("red");

//     function increase() {
//         setCount("blue");
//     }
//     return (
//         <>
//             <h1>{count}</h1>
//             <button onClick={()=>setCount}>
//                 Increase
//             </button>
//         </>
//     );
// }
// export default App;

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import About from "./pages/About";
import Contact from "./pages/Contact";

function Ap(){
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/Users" element={<Users />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
    )
}

export default Ap;