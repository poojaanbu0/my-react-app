import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let Timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => clearTimeout(Timer)
  },[]);


  return <h1>I've rendered {count} timess!</h1>;
}

export default Timer;

                    