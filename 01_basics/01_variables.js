const accountID = 12345
let accountEmail = "rahul@google.com"
var accountPassword = "1234567"
accountCity = "Hyderabad"
let accountState; // if no value then it is undefined
// accountID = 2 //not allowed

accountEmail = "rkj@google.com"
accountPassword = "54321"
accountCity = "Telangana"
/*Never use Var because of issue in block scope and fucntional scope */
console.table([accountID,accountEmail,accountPassword,accountCity,accountState])