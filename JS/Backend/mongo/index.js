const mongoose = require('mongoose');

main().then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test'); if your database has auth enabled
}


const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,

});

const User=mongoose.model("User",userSchema);


// User.find({})
//     .then((res)=>{
//         console.log(res);
//     })

//     .catch((err)=>{
//         console.log(err);
//     });


User.find({age:{$gt:36}})
    .then((res)=>{
        console.log(res);
    })

    .catch((err)=>{
        console.log(err);
    });

// const user1=new User({
//     name:"Adam",
//     email:"adam@yahoo.in",
//     age:56,
// });

// user1.save().then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

// User.insertMany([
//     {name:'william',email:'william@gmail.com',age:34},
//     {name:'drake',email:'drake@gmail.com',age:37},
//     {name:'will',email:'will@gmail.com',age:35}
// ]).then((data)=>{
//     console.log(data);
// })

//we can use every function of mongodb in this file using user.(funt name ).then  as per the syntax