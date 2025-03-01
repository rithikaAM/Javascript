let score = 33;

console.log(typeof score);
// number

let sc = "33";

console.log(typeof sc);
// string

/*********************very important******* */

let Digits = "33abc";
let valueNumber = Number(Digits);
// guarenteed that number is returned as number only
console.log(typeof valueNumber);
// number
console.log(valueNumber);
// NAN

// if digits = null then o/p is 0
// if digits = undefined o/p is nan
// if digits= boolean o/p true=1 or false=0
// "33" => 33
// "33abc" => nan but type is number


// "" => false

// **********************************Operations***************************************/


console.log("1" + 2);
console.log(1+ "2");
// 12 12

console.log("1" + 2 + 2);
// 122
console.log(1+ 2 + "2");
// 32





