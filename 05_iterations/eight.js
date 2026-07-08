const myNums =[1,2,3]

// const myTotal = myNums.reduce(function (acc, curr) {
//     console.log(`acc: ${acc}, curr: ${curr}`);
//     return acc + curr;
// },0);

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);
console.log(myTotal);


const shoppingCart=[
    {
        itemName:"js course",
        price: 999
    },
    {
        itemName:"java course",
        price: 1999
    },
    {
        itemName:"python course",
        price: 2999
    }, 
    {
        itemName:"data science course",
        price: 3999
    }
]

const total = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(total);