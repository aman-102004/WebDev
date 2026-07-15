let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("the game is started");
        started=true;

        levelup();
    }
});


function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },300);
}

function userflash(btn){
    btn.classList.add("btnclr");
    setTimeout(function(){
        btn.classList.remove("btnclr")
    },250);
}
function levelup(){
    userSeq=[];
    level++;

    h2.innerText=`Level ${level}`;

    //random button select
    let randidx=Math.floor(Math.random()*3);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`)
    
    gameSeq.push(randcolor);
    console.log(gameSeq);
    btnflash(randbtn);
    

}


function checkans(idx){
    // console.log("curr level",level);
    
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }

    }
    else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b><br>Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";

        },150);
        
        reset();
    }


}

function btnPress(){
    let btn=this;
    btnflash(btn);
    userflash(btn);

    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);


    checkans(userSeq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}


function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;


}