const mongoose=require("mongoose");
const Chat=require("./models/chats.js");


main()
.then(()=>{
    console.log("connection is successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


let allChats=[
  {
    from: "aman",
    to: "priya",
    msg: "Hey, did you finish your assignment?",
    created_at: new Date()
  },
  {
    from: "priya",
    to: "aman",
    msg: "Not yet, I will finish it by tonight!",
    created_at: new Date()
  },
  {
    from: "rahul",
    to: "neha",
    msg: "Are you coming to college tomorrow?",
    created_at: new Date()
  },
  {
    from: "neha",
    to: "rahul",
    msg: "Yes! I have a lab session.",
    created_at: new Date()
  },
  {
    from: "simran",
    to: "rohan",
    msg: "Please send me yesterday’s notes.",
    created_at: new Date()
  },
  {
    from: "rohan",
    to: "simran",
    msg: "Sure, I’ll send them in 5 minutes.",
    created_at: new Date()
  },
  {
    from: "kavya",
    to: "siddharth",
    msg: "Where are you? I've been calling!",
    created_at: new Date()
  },
  {
    from: "siddharth",
    to: "kavya",
    msg: "Sorry, phone was on silent.",
    created_at: new Date()
  },
  {
    from: "aditya",
    to: "megha",
    msg: "Let's meet at 5 near the cafe?",
    created_at: new Date()
  },
  {
    from: "megha",
    to: "aditya",
    msg: "Okay, see you there!",
    created_at: new Date()
  }
]

Chat.insertMany (allChats);

