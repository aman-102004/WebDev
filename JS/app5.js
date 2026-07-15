// let form=document.querySelector("form");

// form.addEventListener("submit",function(){
//     event.preventDefault();
    
//     let user=document.querySelector("#user");
//     let pass=document.querySelector("#pass");

//     console.dir(user.value);
//     console.dir(pass.value);
// })

let user=document.querySelector("#user");

user.addEventListener("change",function(){
    event.preventDefault();
    console.log(user.value);
})