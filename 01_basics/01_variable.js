const accountID = 144553
let accountEmail = "anish@gmail.com"
var accountPassword = "122334"
accountCity = "Deoria"
let accountStates;

// accountID = 2  // Not Allowd
accountEmail = "singh@gmil.com"
accountPassword = "2121212"
accountCity = "kanpur"
/*
prefer not to use var 
because of issues in block scope and functional scope
*/


console.log(accountID);

console.table([accountID, accountEmail, accountPassword, accountCity, accountStates])