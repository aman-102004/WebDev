import { useState } from "react";
export default function LikeButton(){
    let[isLiked,setisLiked]=useState(false);//These are initialisation lines
    let[isClick,setisClick]=useState(0);
    //while rerendering react starts from here not from initialisation
    //react rerenders the whole component barring the initialisation lines
    let toggleLike=()=>{
        setisLiked(!isLiked);
        setisClick(isClick+1);
        
    };
    
    let likeStyle={color:"red"};
    return(
        <div>
            <p>Click={isClick}</p>
            <p onClick={toggleLike}>
                {isLiked?(<i className="fa-solid fa-heart" style={likeStyle}></i>):(<i className="fa-regular fa-heart"></i>)}</p>
        </div>
    )
}