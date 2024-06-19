import { useEffect, useState } from "react";
import React from 'react';

// let count = 0;
// let count1 = 0;

function UseEffect(){
    
    const[count, setCount] = useState(0);
    const[count1, setCount1] = useState(0);

    useEffect(function(){
        console.log("Count Changed")
    },[count])

    useEffect(function(){
        console.log("Count 1 Changed")
    },[count1])

    return(
        <div>
            <button onClick={() => {setCount(count + 1)}}>Count + 1</button>
            <button onClick={() => {setCount(count - 1)}}>Count - 1</button>
            <p>{count}</p>
            <button onClick={() => {setCount1(count1 + 2)}}>Count1 + 2</button>
            <p>{count1}</p>
        </div>
    );
}

export default UseEffect;