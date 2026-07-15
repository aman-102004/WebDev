import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
export default function TodoList(){
    let [todos,setTodos]=useState([{task:"sample task",id:uuidv4()}]);
    let [newTodo,setnewTodo]=useState("");
    
    let addNewTask=()=>{
        setTodos((prevTodos)=>{
            return [...prevTodos, { task: newTodo, id: uuidv4() }]
        });
        setnewTodo("");

    }

    let updateTodoValue=(event)=>{
        setnewTodo(event.target.value)
    }

    let deletetodo=(id)=>{
       setTodos((prevTodos)=>todos.filter((prevTodos)=> prevTodos.id!=id));
      
    }

    let upperCaseAll=()=>{
       setTodos((prevTodos)=>( 
        prevTodos.map((todo)=>{
        return {
            ...todo,
            task:todo.task.toUpperCase(),
        };
       })));


    }

    let UpperCaseone=(id)=>{
        setTodos((prevTodos)=>( 
        prevTodos.map((todo)=>{
            if(todo.id==id){
            return {
            ...todo,
            task:todo.task.toUpperCase(),
                };
            }else{
                return todo;
            }

       })));
    }


    return (
        <div>
            <input type="text" placeholder="Add a task" value={newTodo} onChange={updateTodoValue}/>
            <br />
            <button onClick={addNewTask}>Add A task</button>
            <br /><br /><br /><br /><br />
            <hr />
            <h4>Todo List</h4>
            <ul>
                {
                    todos.map((todo)=>(
                        <li key={todo.id}>
                        <span>{todo.task}</span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={()=>deletetodo(todo.id)}>delete</button>
                        <button onClick={()=>UpperCaseone(todo.id)}>UpperCase This</button>
                        </li>
                    ))
                }
            </ul>
            <br />
            <br />
            <button onClick={upperCaseAll}>UpperCase</button>

        </div>
    )
}

//here we have build two setState functions and used event.target.value to get the value which is changes in the frontend and update that value using the function we haev craeted also add that value in the todo list