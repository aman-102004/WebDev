import "./Lottery.css";
import { useState } from "react";
import { genTicket,sum } from "./helper.js";

export default function Lottery(){
    let [Ticket,setTicket]=useState(genTicket(3));
    let isWinning=sum(Ticket)===15;

    let Regenerate=()=>{
        setTicket(genTicket(3));
    }
    return(
        <div className="Game">
            <h1>Lottery Game!</h1>
            <div className="ticket">
                <span>{Ticket[0]}</span>
                <span>{Ticket[1]}</span>
                <span>{Ticket[2]}</span>

            </div>
            <button onClick={Regenerate}>Regenerate</button>
            <h3>{isWinning && "Congratulation You won!"}</h3>


        </div>
    )
}