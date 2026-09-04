import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1);
    }

    return (
        <>
            <h1>{count}</h1>

            <button onClick={increase}>
                Increase
            </button>
        </>
    );
}

export default Counter;

function App() {

    const [show, setShow] = useState(true);

    function toggle() {
        setShow(previous => !previous);
    }

    return (
        <>
            {show && <h1>Hello!</h1>}

            <button onClick={toggle}>
                Show / Hide
            </button>
        </>
    );
}