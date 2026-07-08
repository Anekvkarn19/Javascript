// const coding =["js", "ruby", "py", "cpp"];


// const values= coding.forEach( (item) => {
//     console.log(item);
// });

// console.log(values); // undefined

const myNums=[1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.filter((num)=>{return num> 4});
// console.log(newNums);

// const newNums=[];

// myNums.forEach((num)=>{
//     if(num>4)
//     {
//         newNums.push(num);
//     }
// })

// console.log(newNums);



const books=[
    {
        title:"The Great Gatsby",
        genre: "Fiction",
        published: 1925,
        edition:1929
    },
    {
        title:"To Kill a Mockingbird",
        genre: "Fiction",
        published: 1960,
        edition:1961
    },
    {
        title:"1984",
        genre: "Dystopian",
        published: 1948,
        edition:1949
    },
    {
        title:"Brave New World",
        genre: "Dystopian",
        published: 1932,
        edition:1932
    },
    {
        title:"The Catcher in the Rye",
        genre: "Fiction",
        published: 1951,
        edition:1951
    },
    {
        title:"The Hobbit",
        genre: "Fantasy",
        published: 1937,
        edition:1937
    },
    {
        title:"The Lord of the Rings",
        genre: "Fantasy",
        published: 1954,
        edition:1955
    }
];

let userBooks=books.filter((bk)=>bk.genre==="Fiction");

userBooks=books.filter((bk)=>bk.published>=1950 && bk.genre==="Fiction");

console.log(userBooks);