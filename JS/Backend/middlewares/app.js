const express=require("express");
const app=express();
const ExpressError=require("./expresserror");

//here  the middleware keeps executing and sends respond before the actual path so the req never reaches the actual path
// app.use((req,res)=>{
//     console.log("Hi , i am a middleware");
//     res.send("middleware finished");
// });


//here the middleware calls for the next middleware/function after its execution using next argument
// app.use((req,res,next)=>{
//     console.log("Hi , i am a middleware");
//     next();
// });


//utility middleware
//logger-same kind of ex-morgan

// app.use((req,res,next)=>{
//     req.time=new Date(Date.now()).toString();
//     console.log(req.method,req.hostname,req.path,req.time);
//     next();


// })






// app.use("/random",(req,res,next)=>{
//     console.log("i am a middleware for random route");
// })


// app.use("/api",(req,res,next)=>{
//     let {token}=req.query;
//     if(token==="giveaccess"){
//         next(); //use url localhost:8080/api?token=giveaccess
//     }           //used as protection for a route
//     res.send("ACCESS DENIED");
// })

const checktoken=(req,res,next)=>{
    let {token}=req.query;
    if(token==="giveaccess"){
        next(); //use url localhost:8080/api?token=giveaccess
    }           //used as protection for a route
    throw new ExpressError(401,"ACCESS DENIED");
};

app.get("/api",checktoken,(req,res)=>{
    res.send("data");
});

app.get("/",(req,res)=>{
    res.send("hi,i am the root");
});

app.get("/random",(req,res)=>{
    res.send("this is a random page");
});



//error middlewares

app.get("/err",(req,res)=>{
    abcd=abcd
})

app.use((err,req,res,next)=>{
    let {status,message}=err;
    res.status(status).send(message);//this will search for another non-error handling middleware
    //write next(err) if we want to trigger the next error handling middleware or the default error handler of express.js 
})



// //404 error
// app.use((req,res)=>{
//     res.send("page not found");
// })
app.listen(8080,()=>{
    console.log("serves is listening to port 8080");
})