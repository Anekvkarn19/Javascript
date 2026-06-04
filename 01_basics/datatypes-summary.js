//Stack(Primitive) , Heap(non-primitive) memory

let myName="anekvarnacom";

let anothername= myName;

anothername="jaduu";

console.log(myName);
console.log(anothername);

let userOne={
    email:"user@goofle.com",
    upi: "user@ybl"
}

let userTwo= userOne

userTwo.email="anek@google.com"

console.log(userOne.email);
console.log(userTwo.email);
