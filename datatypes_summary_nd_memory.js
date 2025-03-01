// primitive-- stack

// 7
// call by value
// String
// Number
// Boolean
// null
// undefined
// bigint
// Symbol

// reference type/ non primitive-- heap

// array
// objects
// functions

//stack, heap

let name = "rithikamurali.com";

let anothername = name;

anothername = "gowtham";

console.log(anothername);
console.log(name);
//when something is changed in stack it does not change in original value
//when you change anthing in heap it changes the original value as the original value is the reference for all the new values created
