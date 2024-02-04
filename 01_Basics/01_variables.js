const accId= 138728
let accEmail= "prathamtetgure@gmail.com"
var accPass= "12345"
accCity= "Thane"
let accState;

// accountId = 2 // not allowed
accEmail= "tetgurepratham@gmail.com"
accPass= "54321"
accCity= "Dombivli"
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.log(accId);
console.table([accId, accEmail, accPass, accCity, accState])