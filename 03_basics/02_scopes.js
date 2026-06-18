// var c=300
// {}//scope
let a =300
if(true){
    let a =10
    const b=20
    
}
// for(let i=0; i<array.length; i++){
//     const element =array[i];
// }

// console.log(a);
// console.log(b);
// console.log(c);//ye print hojayega kyuki var scope nhi dekhta


function one(){
    const username ="anekk"

    function two(){
        const website ="youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

one()

if(true)
{
    const username ="anekk"
    if(username ==="anekk"){
        const website =" youtube";
        // console.log(username + website);
    }
    // console.log(website);//error
}
// console.log(username);//error


// +++++++++++++interesting ++++++++++++

addone(5)//will not give error
function addone(num){
 return num +1
}



// addTwo(5)//will give error
const addTwo =function(num){
    return num+2
}

addTwo(5)



