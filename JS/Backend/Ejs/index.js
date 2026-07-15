const express=require("express");
const app=express();
const path=require("path");

const port=3000;

app.use(express.static("public"));


app.set("views",path.join(__dirname,"/views"));//this is used when we will access the srever from outside dir and views folder will not be found so this will help in giving the corect directory
app.set("view engine","ejs");//by default express searches for view in views folder in this folder only

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const instadata=require("./data.json");
    const data=instadata[username];
    res.render("instagram.ejs",{data});
})

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
});


app.get("/rolldice",(req,res)=>{
    let diceval=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{num :diceval});//here we have supposed we are getting value from a database bcauz generally we get data from a database in backend so this is how we will use that data
});
