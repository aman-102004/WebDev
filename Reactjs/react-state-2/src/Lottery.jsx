import "./Lottery.css";
import { useState } from "react";
import { genTicket,sum } from "./helper.js";
import Ticket from "./Ticket.jsx";

export default function Lottery({n,winCondition}){
    let [ticket,setTicket]=useState(genTicket(n));
    let isWinning=winCondition(ticket);

    let Regenerate=()=>{
        setTicket(genTicket(n));
    }
    return(
        <div className="Game">
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}></Ticket>
            <button onClick={Regenerate}>Regenerate</button>
            <h3>{isWinning && "Congratulation You won!"}</h3>


        </div>
    )
}