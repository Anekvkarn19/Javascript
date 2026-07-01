const user ={
    username: "anekk",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "anekk";
//     console.log(this.username);
// }

// chai()

const chai = () => {
    let username = "anekk"
    console.log(this);

}
// chai()
// const addTwo =(num1, num2) => {
//     return num1 + num2
// }
// const addTwo =(num1, num2) => num1 + num2  
// const addTwo =(num1, num2) => (num1 + num2)

const addTwo =(num1, num2) => ({username: "anekk"})
    console.log(addTwo(2, 3));

    const myArray = [1, 2, 3, 4, 5]

    myArray.forEach(() => {
        console.log(this);
    })