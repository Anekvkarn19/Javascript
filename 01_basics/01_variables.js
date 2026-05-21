const accountId =144553
let accountEmail = "anekvarna0@google.com"
var accountPassword ="12345"
accountCity ="Jaipur"
//accountId =2 //not allowed
accountEmail ="frgfg.com"
accountPassword="4646"
accountCity="Bengaluru"
console.log(accountId);
/* 
Prefer not to use var because of issue in block or functional scope. 
*/
console.table([accountId, accountEmail, accountPassword, accountCity])