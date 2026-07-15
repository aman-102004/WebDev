let btns=document.querySelectorAll('button');

for(btn of btns){
    // btn.onclick=sayhello;
    // btn.onmouseenter=function(){
    //     console.log('hi Mouseee');


    btn.addEventListener("click",sayhello);
    btn.addEventListener("click",function(){
        console.log("Hello");
    });

    }



function sayhello(){
    alert('button was clicked');
}