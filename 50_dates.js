/* 
date objects:
objects that contain values that represent dates and times
these date objects can be changed and formatted
*/


// Date(year, month, day, hour, minute, second, ms)
// const date = new Date(2027, 0, 1, 2, 3, 4, 5)
// const date = new Date("2024-01-02T12:00:00Z")

const date = new Date();

// get date
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours ();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const day_of_week = date.getDay();
console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(day_of_week);
console.log(date)

// set date
date.setFullYear(2024);
date.setMonth(0);
date.setDate(1);
date.setHours(2);
date.setMinutes(3);
date.setSeconds(3);
console.log(date);

// compare dates
const date1 = new Date("2023-12-31");
const date2 = new Date("2023-12-30");


if(date1 > date2) console.log ("HAPPY NEW YEAR!");