// Variable types

const accountId = 1234
let accountName = 'Aviraj'
var accountType = 'permanent'

// accountId = 2 is not allowed as const can be defined only once

accountName = 'Avi'
accountType = 'temp'
city = 'Bangalore'

console.table([accountId, accountName, accountType, city])

/* 
Prefer not to use var because of block scope and functional scope issue.
Without declaring the types of variable, we can assign values in JS but it is not a standar method.
*/