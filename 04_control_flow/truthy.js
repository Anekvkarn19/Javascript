const userEmail =[]

if (userEmail){
    console.log("Email is present");
}else{
    console.log("Email is not present");
}

// falsy values

// false, 0, -0, BigInt(0n), "", null, undefined, NaN

//truthy values
// "0", "false", " ",[], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj={}
 
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// false==0//true, false==""//true, 0==""//true

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1=5??10 //5
// val1=null??10 //10
// val1=undefined??10 //10
val1= null?? 10 ?? 20 //10 

console.log(val1);

//Ternary Operator

// condition ? expression1 : expression2

const iceTeaPrice = 100
iceTeaPrice > 100 ? console.log("Ice tea is expensive") : console.log("Ice tea is cheap");