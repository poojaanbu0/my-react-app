import React from "react";

// class Header extends React.Component {

//     componentWillUnmount() {
//         console.log("Header is being removed!");
//     }

//     render() {
//         return <h1>Hello Header</h1>;
//     }
// }

// class App extends React.Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             showHeader: true
//         };
//     }

//     removeHeader = () => {
//         this.setState({
//             showHeader: false
//         });
//     };

//     render() {
//         return (
//             <>
//                 {this.state.showHeader && <Header />}

//                 <button onClick={this.removeHeader}>
//                     Remove Header
//                 </button>
//             </>
//         );
//     }
// }

class Timer extends React.Component {

    componentDidMount() {

        this.timer = setInterval(() => {
            console.log("Timer running...");
        }, 1000);

    }

    componentWillUnmount() {

        clearInterval(this.timer);

        console.log("Timer stopped");

    }

    render() {
        return <h1>Timer</h1>;
    }
}

export default Timer;