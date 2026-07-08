//if
const isUserLoggedIn = true;
const temperature =41

// if(temperature < 50){
//     console.log("less than 50");
// }   
// else{
//     console.log("greater than 50");
// }

// console.log("Execute");
// < , >, <=, >=, ==(sirf value check krta hai), ===(type v check krta hai), !=, !==

const score = 200

// if(score > 100)
// {
//     const power ="fly";
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`); //error because power is block scoped

// const balance =1000

// // if(balance > 500) console.log("test"),
// // console.log("test2") //aisa nhi krna hai , wala

// if(balance < 500) {
//     console.log("balance is less than 500");
// }
// else if(balance <750){
//     console.log("balance is between 500 and 750");
// }
// else if(balance < 900){
//     console.log("balance is greater than 750 but less than 900");
// }
// else{
//     console.log("balance is less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if(userLoggedIn && debitCard && 2==2){
    console.log("Allow user to buy");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}
