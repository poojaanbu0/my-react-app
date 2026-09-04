import { useState, useEffect, useRef } from "react";
import {createRoot}  from 'react-dom/client';

function Focus(){
    const [inputValue, SetInputValue] = useState("");
    const previousValue = useRef("");
 
    useEffect(() =>
    {previousValue.current = inputValue;}
      , [inputValue]);

    return (
        <>
        <input type = "text" 
        value = {inputValue}
        onChange =  {(e) => SetInputValue(e.target.value)}
        />
        <h1>Currentvalue: {inputValue}</h1>
        <h1>previous value : {previousValue.current} </h1>
        </>
    )
}

export default Focus;