let todo=[];

let req=prompt("Please Enter your Request");

console.log(req);

while (true){
    if(req=="quit"){
        console.log("Quitting app");
        break;
    }

    if(req=="list"){
        console.log("--------------");
        for(let i=0 ;i<todo.length;i++){
            console.log(i,todo[i]);

        }
        console.log("--------------");


    }
    else if(req=="add"){

        let task=  prompt("Please enter task you want to add: ");
        todo.push(task);
        console.log("task added");

    }

    else if(req=="delete"){
        let idx=prompt("Enter the task index");
        todo.splice(idx,1);
        console.log("Task Deleted");
    }

    else{
        console.log("Wrong request")
    }

    req=prompt("Please Enter your Request");

    
}