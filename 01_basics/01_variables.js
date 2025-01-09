const accountId = 8468684
let accountEmail = "jayveer@gmail.com"
var accontPassword = "466464347"
accountcity = "Ahemdabad"
let accountState

/*
Prefer not to use var
because of issue in block scope & functional scope
*/

// accountId = 2 // not allowed

console.log(accountId)

accountEmail = "yash@gmail.com"
accontPassword = "546644641"
accountcity = "Rajkot"

console.table([accountId, accountEmail, accontPassword, accountcity, accountState])