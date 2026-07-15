import { useState } from "react";
export default function LudoBoard(){

    let [moves,setmoves]=useState({blue:0,red:0,yellow:0,green:0});
    let updateBlue=()=>{
        setmoves((prevmoves)=>{
            return ({...prevmoves,blue:prevmoves.blue+1});
        });
        
    }
     let updateYellow=()=>{
        setmoves((prevmoves)=>{
            return ({...prevmoves,yellow:prevmoves.yellow+1});
        });
        
    }
     let updateRed=()=>{
        setmoves((prevmoves)=>{
            return ({...prevmoves,red:prevmoves.red+1});
        });
        
    }
     let updateGreen=()=>{
        setmoves((prevmoves)=>{
            return ({...prevmoves,green:prevmoves.green +1});
        });
        
    }
    
    return (
        <div >
            <p >Game Begins</p>
            <div className="board">
                <p>Blue moves={moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>

            </div>
            <div className="board">
                <p >Yellow moves={moves.yellow}</p>
                <button style={{backgroundColor:"yellow",color:"black"}} onClick={updateYellow}>+1</button>

            </div>
            <div className="board">
                <p>Green moves={moves.green}</p>
                <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>

            </div>
            <div className="board">
                <p>Red moves={moves.red}</p>
                <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>

            </div>

        </div>
        
    )
}