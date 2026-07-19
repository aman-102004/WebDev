import { useState } from "react";
import CommentsForm from "./CommentsForm";
export default function comments(){
    let [comments,setComments]=useState([{
        username:"@sk",
        remarks:"great job",
        rating:4
    }]);

    let addNewComment=(comment)=>{
        setComments((currComments)=>[...currComments,comment]);
    }
    return(
        <>
        <div>
            <h3>All Comments</h3>
            {comments.map((comment,idx)=>{
                return(
                <div className="comment" key={idx}>
                <span>{comment.remarks}</span>
                &nbsp;
                <span>rating={comment.rating}</span>
                &nbsp;
                <p>{comment.username}</p>
            </div>
                )

            })}
            
        </div>
        <hr /><hr />
        <CommentsForm addNewComment={addNewComment}></CommentsForm>
        </>
    )

}