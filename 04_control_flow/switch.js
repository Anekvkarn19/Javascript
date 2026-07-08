// switch (key) {
//     case value1:
//         // code to execute
//         break;
//     case value2:
//         // code to execute
//         break;
//     default:
//         // code to execute if no case matches
// }

const month =3

switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;             
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month");
}
//break is used to exit the switch statement after a case has been executed. If break is omitted, the program will continue to execute the next case(s) until it encounters a break or reaches the end of the switch statement. This is known as "fall-through" behavior.Except for the last case(default), which does not require a break statement, as it is the end of the switch statement.