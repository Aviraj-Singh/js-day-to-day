// Date is an object in JS
let date = new Date()

// Date Methods
console.log(date) // 2024-01-15T19:54:23.156Z
console.log(date.toString()) // Mon Jan 15 2024 19:54:23 GMT+0000 (Coordinated Universal Time)
console.log(date.toDateString()) // Mon Jan 15 2024
console.log(date.toLocaleDateString()) // 1/15/2024
console.log(date.toISOString()) // 2024-01-15T19:54:23.156Z
console.log(date.toUTCString()) // Mon, 15 Jan 2024 19:54:23 GMT

// Creating New Date:

let new_date = new Date(2024, 0, 16) // Month starts with index 0 in JS
console.log(new_date.toDateString())

// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

// Customizing LocaleString
newDate.toLocaleString('default', {
    weekday: "long",
    
})  