// let img=document.getElementsByClassName("oldImg");

// for(let i=0;i<img.length;i++){
//     img[i].src="assets/spiderman_img.png";

//     console.log(`image of ${i} changed`);
// }


// console.dir(document.querySelector("#description"));

// let links=document.querySelectorAll(".box a");

// for(let i=0;i<links.length;i++){
//     links[i].style.color="yellow";

// }

// let btn=document.createElement("Button");

// btn.innerText='Hi';

// let box=document.querySelector('.box');

// box.appendChild(btn);


let input=document.createElement("input");

let body=document.querySelector("body");

body.append(input);

let button=document.createElement("button");


button.innerText='click me';
body.append(button);