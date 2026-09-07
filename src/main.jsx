import { StrictMode } from 'react'
import { useState,useEffect } from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import useFetch from './useFetch';
import Header from './Class.jsx'
import App from './Event.jsx'
import MyCar from './MyCar_hook.jsx';
import Timer from './Time_hook.jsx'
import Counter from './Use_State.jsx';
import Toggle from './Toggle.jsx';
import Count from './Count.jsx';
import Component1 from './Context.jsx';
import Focus from './Ref.jsx';
import CallbackExample from './Callback.jsx';
import Memo from './Memo.jsx';
import Mylist from './Map.jsx';
import Form from './Forms.jsx';
import Ap from './App.jsx';


// const Home = () => {
//     const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((res) => res.json())
//       .then((data) => setData(data));
//  }, []);

//   return (
//     <>
//       {data &&
//         data.map((item) => {
//           return <p key={item.id}>{item.title}</p>;
//         })}
//     </>
//   );
// };

function Counte() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Count changed:", count);
    }, [count]);

    return (
        <>
            <h1>{count}</h1>

            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>
        </>
    );
}

createRoot(document.getElementById('root')).render(
    <>
    {/* <App/>
    <Header/>
    <MyCar /> */}
      
    {/* <Mylist /> 
    <Timer />
    <Counter />
    <Toggle />
    <Count />
    <Component1 />
    <Focus />
    <CallbackExample />
    <Memo />
    <Form/> */}
    <Ap/>
    </>
);