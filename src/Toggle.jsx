import { useState } from "react";

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

export default App;