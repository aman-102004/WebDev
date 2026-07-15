import { useState } from "react"

export default function Counter(){
    // let count=0;

    // function incCount(){
    //     count+=1;
    //     console.log(count);


    //Syntax for reconstructing a usestate
    // let [stateVariable,setStateVariable]=useState(0);
    let[Count,setCount]=useState(0);
    let incCount=()=>{
        setCount((currCount)=>{
            return currCount+1;
        });

        setCount((currCount)=>{
            return currCount+1;
        });
        

    }
    return (
        <div>
            <h3>Count={Count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    );
}