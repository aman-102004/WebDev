
// let pencilPrice=10;
// let erosorPrice=5;
// // let output="The Total Price is : " + (pencilPrice+erosorPrice) + " rupees";
// console.log(`The Total Price is : ${pencilPrice+erosorPrice} rupees`);


//conditional statement

// let a=10;
// let b=8;

// if(a<b){
//     console.log("Hiii");
// }

// else{
//     console.log("Byeee")
// }



// firstname=prompt("Enter first name:");
// lastname=prompt("Enter last name");

// console.log("Hi",firstname,lastname,"!");

// str="IloveCoding";
// console.log(str.slice(1,5));


// let students=["aman","raj"];
// console.log(students);


// let tic_tac=[['X',null,'O'],[null,'X',null],['O',null,'X']];
// console.log(tic_tac);


// for(let i=1;i<=5;i++){
//     console.log(i);
// }


// for(let i=1;i<=15;i++){
//     if(i%2!=0){
//         console.log(i);
//     }
// }

// let favMovie="avatar";
// let guess=prompt("Enter Your Guess:");

// while((guess!=favMovie)&&(guess!='quit')){
    
//     guess=prompt("Wrong!Enter Your Guess again:");
// }

// if(guess==favMovie){
//     console.log("Congratulations!You guessed it right");

// }

// else{
//     console.log("Quittt!");
// }

// let students=[["aman",90],["apoorv",80]];
// for(let i=0;i<students.length;i++)
    
//     {
        
//     for(let j=0;j<students[i].length;j++){
//         console.log(students[i][j]);
//     }
// }


// let fruits=['apple','banana','Apple']

// for(fruit of fruits){
//     console.log(fruit);
// }

// let arr=[1,2,3,4,5,6,2,3];
// console.log(arr);
// let num=2;

// for(let i=0;i<arr.length;i++){
//     if (arr[i]==num){
//         arr.splice(i,1);
//     }
    

// }
// console.log(arr);


// const thread={
//     username:"amanv7870",
//     content:"This is my first post",
//     likes:140,
//     repost:24,
//     tags:["@apnaclg","@amandhattarwal"]


// };

// console.log(thread);

//generating random number from 1 to 10

// let step=Math.random();

// step=step*10;
// step=Math.floor(step);
// step=step+1;


// let n=prompt("Enter a Max Number(bw 1-100):");

// let n1=Math.floor(Math.random()*n)+1;

// let n2=prompt(`Enter Your Guess IN Range 1-${n}`);

// while(n2!=n1 && n2!="quit"){
//     if(n2>n1){

//         n2=prompt(`Wrong!Hint:Num too Large`);
//      }


    
//     else{
//         n2=prompt("Wrong!Hint Num to small");
//      }
    
    
    
// }

// if(n2==n1){ 
// console.log(`You guessed it Right The Random Num is ${n1}`);

// }

// else if(n2=="quit"){
//     console.log("You Quitted the game ");
// }


// function hello(){
//     console.log("Hello");

// }

// hello();

// function dice(){
//     let n=Math.floor(Math.random()*6)+1;
//     console.log(n);
// }


// dice();

// function calculator(num1,num2,operator)
// {
//     switch(operator){
//         case '+':
//             console.log(`Sum is ${num1+num2}`);
//             break;
        
//         case '-':
//             console.log(`Subtraction is ${num1-num2}`);
//             break;
    
//         case '*':
//             console.log(`Multiplication is ${num1*num2}`);
//             break;
                
//         case '/':
//             console.log(`Division is ${num1/num2}`);
//             break;               
//         }
// }
// calculator(10,5,'*');


// function sum1toN(num){
//     let sum=0;
//     for(let i=1;i<=num;i++){ 
//         sum=sum+i;
//     }

//     return sum;

// }

// sum1toN(5);


// function ngreet(func,n){   //higher order function 
//     for(let i=0;i<=n;i++){
//         greet();
//     }
// }
// let greet=function(){
//     console.log("Hello World");
// }

// ngreet(greet,100);
// let arr=[10,29,40,56];
// num=25;
// function arrayreturn(arr,n){

    
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>n){
//             console.log(arr[i]) ;
//         }
//     }
// }
// arrayreturn(arr,num);

// let str="abcdabcdefgggh";
// let str1="";

// for(let i=0;i<str.length;i++){
//     let c=str.charAt(i);
//     for(let j=0;j<str.length;j++){
//         if(str1.indexOf(c)==-1){
//             str1=str1.concat(c);
//         }
//     }
// }

// console.log(str1);

// let country=[];

// let n=prompt("Please enter total no of countries");

// for(let i=0;i<n;i++){
//     country[i]=prompt(`Enter ${i+1} Country name :`);
// }

// for(let j=0;j<n;j++){
//     let count=1;
//     maxcount=0;
//     for(let k=0;k<=country[j].length;k++){
//         count++;
//     }
//     if(count>maxcount){
//         maxcount=count;
//     }
// }
// console.log(country);
// console.log(`The country with longest name has ${maxcount} words`);


// let max=200;
// let min=100;

// function generaterandom(n,m){
//     let differ=n-m;
//     let num=Math.floor(Math.random()*differ)+min;
//     console.log(num);
    
// }
// generaterandom(200,100);

// let sum=(a,b)=>{  
//     console.log(a+b); 
// }
// sum(5,6);

// console.log("Hi there!");
// setTimeout(()=>{
//     console.log("Aman");
// },3000);
// console.log("This is ")

// console.log("Hi there!");
// let id=setInterval(()=>{
//     console.log("Aman");
// },3000);
// console.log("This is ");

// let square=(n)=>(n*n);

// console.log(square(5));

// let id=setInterval(()=>{
//     console.log("Hello world");

// },2000);

// setTimeout(()=>{
//     clearInterval(id);
//     console.log("Completed");

// },10000);
// arr=[1,2,10,4,5];
// let avg=(arr)=>{
//     let sum=0
//     for(let i=0;i<arr.length;i++){
//         sum=sum+arr[i];
        
//     }
//     let avg=sum/arr.length;
//     return avg;
// }

// console.log(avg(arr));

// let obj=[{
//     name:"Aman",
//     marks:95
// },{
//     name:"Apoorv",
//     marks:98,
// },{
//     name:"mansi",
//     marks:88,
// }];

// obj.forEach((student)=>{
//     console.log(student.marks);
// })

// let nums=[2,5,8,22,665,32];
// let max=nums.reduce((res,el)=>{
    
    
//         if(el>res){
            
//             return el;
//         }
//         else{
//             return res;
//         }

    
// });

// console.log(max);

// nums=[2,5,7,3,6,9];
// let sq=nums.map((el)=>
//     el*el);
// console.log((sq));

// let sum=sq.reduce((el,num)=>el+num);
// console.log(sum);

// let avg=sum/nums.length;
// console.log(avg);

// let nums=[1,2,3,5,6];

// let s=nums.map((el)=>el+5);

// console.log(s);

let nums=[2,6,4,9,8,3];
function doublandreturnargs(arr,...variable){
    



}