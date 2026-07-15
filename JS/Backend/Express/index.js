const express=require("express");
const app=express();//we will store the value returned by express function in this variable
//app is an object which will be used for backend activities

let port=3000;//port are already defined like eg 3000 or 8080
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});

// app.use((req,res)=>{
//     console.log("Req Incoming");
//     res.send("This is a Basic Response")
// })

// app.get("/",(req,res)=>{
//     res.send("You contacted rootpath ok");
// });

// app.get("/apple",(req,res)=>{
//     res.send("You contacted apple one rootpath");
// });

// app.get("/orange",(req,res)=>{
//     res.send("You contacted orange rootpath");
// })

// app.get("*",(req,res)=>{
//     res.send("THis path not available");
// })

app.get("/",(req,res)=>{
    res.send("You contacted rootpath ok");
});

app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.params;
    res.send(`<h1>Welcome Back ${username}</h1>`);
});

app.get("/search",(req,res)=>{
    let {q}=req.query;//all query will be printed
    if(!q){
        res.send(`<h1>No query</h1>`);
    }
    
    res.send(`<h1>Search Results for :${q}</h1>`);

})