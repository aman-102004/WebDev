// let url ="https://catfact.ninja/fact";
// fetch(url) //this will return a promise so we can use then and catch in it 

// .then((response)=>{   //now above promise is resolved so we will take that response and then convert it into json format but it will again return a promise 
//     console.log(response);
//     return response.json();
    
// })
// .then((data)=>{ //the promise returned by response.json is resolved so we will print that data
//       //response.json is used to display data on cosnole
//         console.log("Data 1-",data);
//         return fetch(url); //from here repeat above process
// })

// .then((res)=>{
//     return res.json();  
// })

// .then((data)=>{
//     console.log("Data 2-",data);
// })



// .catch((err)=>{
//     console.log("Error - ",err);
// })


// async function  getfacts() {
//     try { 
//     let res=await fetch(url);
//     let data=await res.json();
//     console.log(data.fact);
//     }

//     catch(e){
//         console.log("Error-",e)
//     }
// }

// getfacts();


// writing coode using AXIOS

// async function  getfacts() {
//     try { 
//     let res=await axios.get(url);
    
//     return (res.data.fact);
//     }

//     catch(e){
//         console.log("Error-",e);
//         return "No fact found";
//     }
// }



// let btn=document.querySelector("button");

// btn.addEventListener("click",async()=>{
//     let fact=await getfacts();
//     console.log(fact);

//     let p=document.querySelector("#facty");
//     p.innerText=fact;

// })





// const url="https://icanhazdadjoke.com/";


// async function getjokes(){
//     try{
//         const config={headers:{Accept:"application/json"}};
//         let res = await axios.get(url,config);

//         console.log(res.data);

//     }
//     catch(err){
//         console.log(err);
//     }
// }


let url="http://universities.hipolabs.com/search?name=";



async function getclg(country){
    try{
        let res=await axios.get(url+country);
        return res.data;

    }
    catch(e ){
        console.log("error - ",e);
        return [];
    }


}
let btn =document.querySelector("button");

function show(colArr){

    let list=document.querySelector("#list");
    list.innerText="";
    for(col of colArr){
        
        console.log(col.name);
        let li =document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li);

    }
}

btn.addEventListener("click",(async()=>{
    let country=document.querySelector("input").value;
    
    let colArr =await getclg(country);
    show (colArr);
    
}))

