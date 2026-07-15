//callback hell and promises





// function savetodb(data,success,failure){
//     let internetspeed=Math.floor(Math.random()*10)+1;
//     if(internetspeed>4){
//         success();
//     }
//     else{
//         failure();
//     }
    
// }

// savetodb("aman",()=>{
//     console.log("Success!Your data was saved");
//     savetodb("Hello world",()=>{
//         console.log("Success 2! data saved");
//     },
//     ()=>{
//         console.log("Failure2! weak connection");
//     }
//     )
// },
// ()=>{
//     console.log("Failure!Weak connection,Data was not saved");
// });

// function savetodb(data){
    
//     return new Promise((resolve,reject)=>{
//         let internetspeed=Math.floor(Math.random()*10)+1;
//         if(internetspeed>4){
//             resolve("Success : data was saved");
//         }
//         else{
//             reject("Failed : week network");
//         }

//     })
    
// }


// savetodb("Apna College")
// .then((result)=>{
//     console.log("Promise resolved:",result);
//     return savetodb("Hello World");
    
// })
// .then((result)=>{
//     console.log("Data 2 saved:",result);
//     return savetodb("Aman");
// })

// .then((result)=>{
//     console.log("Data 3 saved:",result);
    
// })
// .catch((fail)=>{
//     console.log("Promise was not resolved:",fail);
// });

// async function hello() {
//     throw "failed";
//     return "hello";
    
// }

// hello()
// .then((result)=>{
//     console.log("The problem was resolved",result);
// })

// .catch((fail)=>{
//     console.log("Problem was not resolved",fail);
// })

// function getnum(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{ 
//         let num=Math.floor(Math.random()*10)+1;
//         console.log(num);
//         resolve();
        

//     },1000);

// });
// }

// async function demo() {

//     await getnum();
//     await getnum();
//     await getnum();

    
   
    
// }
let h1=document.querySelector("h1");
function changecolor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;

            console.log("Color Changed");
            resolve("Color changed");
        },delay);
    }); 
    
}


async function demo() {
    await changecolor("red",1000);
    await changecolor("yellow",1000);
    await changecolor("green",1000);
    await changecolor("blue",1000);
    await changecolor("orange",1000);

    
}