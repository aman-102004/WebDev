// import LudoBoard from "./LudoBoard.jsx";
// import TodoList from "./TodoList.jsx";

import Lottery from "./Lottery.jsx";
import Ticket from "./Ticket.jsx";
import { sum } from "./helper.js";
function App() {
  
  let winCondition=(ticket)=>{
    return sum(ticket)===15;
  }
  return (
    <div>
    <Lottery n={3}  winCondition={winCondition}></Lottery>
    </div>
  )
}

export default App


//  <>
//       //<LudoBoard ></LudoBoard>
//     </>
