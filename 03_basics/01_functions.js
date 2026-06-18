
function sayMyName(){
console.log("A");
console.log("N");
console.log("E");
console.log("K");
console.log("A");
console.log("A");
}

// sayMyName()

// function addTwoNumbers(number1, number2 ){
//     console.log(number1+number2);
// }
function addTwoNumbers(number1, number2 ){

    // let result = number1 + number2
    // return result;
    return number1+number2;
}

const result = addTwoNumbers(3,4)

// console.log("Result:", result);


function loginUserMessage(username = "sam")
{
    if(username === undefined){
        // console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("anekvarna"))
// console.log(loginUserMessage("anekaa"))

function calculateCartPrice(...num1){//... is called rest operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500))

const user={
    username: "anekkk",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and the price is ${anyObject.price}`)
}

// handleObject(user)
handleObject({
    username:"sam",
    price: 399
})

const myNewArray =[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));


