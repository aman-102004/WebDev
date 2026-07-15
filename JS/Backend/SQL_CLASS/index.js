const { faker } = require('@faker-js/faker');
const mysql =require('mysql2');
const express=require("express"); 
const app=express();
const path=require("path");
const methodOverride=require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

const connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  database:'delta_app',
  password:'Amanv7870@'
});

let getRandomUser = () => {
  return[ 
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
    
];
}

//inserting new data
// let q = "INSERT INTO user (id,username,email,password) VALUES ?";

// let data=[];

// for (let i=0;i<=100;i++){
//   data.push(getRandomUser());//100 fake users

// }

// 

// connection.end();



//home route
app.get("/",(req,res)=>{
  let q=`select count(*) from user`;
try {
  connection.query(q,(err,result)=>{
  if(err) throw err;
  count=result[0]["count(*)"];
  res.render("home.ejs",{count});
  
});

}catch(err){
  console.log(err);
  res.send("some error in database");
};
  
});


//show route

app.get("/user",(req,res)=>{
  let q=`SELECT * FROM user`;
  try {
  connection.query(q,(err,users)=>{
  if(err) throw err;
  // console.log(result);
  // res.send(result);
  res.render("showusers.ejs",{users});
  
});

}catch(err){
  console.log(err);
  res.send("some error in database");
};


});


//EDIT ROUTE
app.get("/user/:id/edit",(req,res)=>{

  let { id}=req.params;
  let q=`SELECT * FROM user WHERE id='${id}'`;
  try {
  connection.query(q,(err,result)=>{
  if(err) throw err;
  
  let user=result[0];
  res.render("edit.ejs",{user});
  
  
});

}catch(err){
  console.log(err);
  res.send("some error in database");
};


})


//update route

app.patch("/user/:id",(req,res)=>{
  let { id}=req.params;
  let {password:formpass,username:newUsername}=req.body;
  let q=`SELECT * FROM user WHERE id='${id}'`;
  try {
  connection.query(q,(err,result)=>{
  if (err) throw err;
  let user=result[0];
  if(formpass!=user.password){
    res.send("Wrong password");
  }else{
    let q2=`UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
    connection.query(q2,(err,result)=>{
      if (err) throw err;
      res.redirect("/user");

    });
  }  
});

}catch(err){
  console.log(err);
  res.send("some error in database");
};
});

app.get("/user/add",(req,res)=>{

  res.render("add.ejs");

})

app.post("/user/add",(req,res)=>{
  
  let {id:newid,email:newemail,password:pass,username:newuser}=req.body;

  

  let q=`INSERT INTO user (id,username,email,password) VALUES (?,?,?,?)`;
  let data=[newid,newuser,newemail,pass];
  try{
  
  connection.query(q,data,(err,result)=>{
  if (err) throw err;

  res.redirect("/user");

  });
  }catch(err){
    console.log(err);
  };


});


app.get("/user/:id/delete",(req,res)=>
  {   
    let { id }=req.params;
    let q=`SELECT * from user WHERE id='${id}'`;

    try{ 
    connection.query(q,(err,result)=>{
      if (err) throw err
      let user=result[0];
      res.render("delete.ejs",{user});

    });
    }catch(err){
      res.send("some error in db");

    }
});


app.delete("/user/:id/",(req,res)=>
{

  let {id }=req.params;

  let {password}=req.body;

  let q=`SELECT * FROM user WHERE id='${id}'`;

  try{
     connection.query(q,(err,result)=>{
     if (err) throw err; 
     let user=result[0];

     if(user.password!=password){
      res.send("WRONG PASSWORD!TRY again");
     }else{
      let q2=`DELETE FROM user WHERE id='${id}'`;
      connection.query(q2,(err,result)=>{
        if (err) throw err;
        else{
          console.log(result);
          console.log("deleted");
          res.redirect("/user")
        }
      })
     }


  });

  }
  catch(err){
    console.log("some err in DB");

  }
 

})

app.listen("8080",()=>{
  console.log("server is lsitening to port 8080")
})


// try {
//   connection.query(q,[data],(err,result)=>{
//   if(err) throw err;
//   console.log(result);
  
// });

// }catch(err){
//   console.log(err);
// };
