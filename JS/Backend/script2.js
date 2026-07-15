// first way to use this module.export 
// const sum=(a,b)=>a+b;

// const mul=(a,b)=>a*b;
// const sub=(a,b)=>a-b;

// let obj={
//     sum:sum,
//     mul:mul,
//     sub:sub
// };



// module.exports=obj;


// second way
// module.exports={
//     sum:sum,
//     mul:mul,
//     sub:sub
// };


// third way 
module.exports.sum=(a,b)=>a+b;

module.exports.mul=(a,b)=>a*b;
module.exports.sub=(a,b)=>a-b;

