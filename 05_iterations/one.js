//for

for(let index=0; index<10; index++){
    const element = index;
    if(element == 5)
    {
        // console.log("5 is best number");
    }
    // console.log("Element is: ", element);

}

// console.log(element);//cannot be accessed

// for(let i=0;i<=2;i++)
// {
//     console.log(`Outer loop value:${i}`);
//     for(let j=0;j<=10;j++)
//     {
    
//       console.log(`Inner loop value ${j} and inner loop ${i}`);
//     }
// }

let myArray=["flash","superman","batman","wonderwoman"]

for(let i=0;i<myArray.length;i++)
{
    const element = myArray[i];
    // console.log(`Element is: ${element}`);
}

//break and continue

for(let i=1;i<=20;i++)
{
    
    if(i==5)
    {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value is: ${i}`);
}