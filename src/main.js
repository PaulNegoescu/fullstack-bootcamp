// Primitive data types
console.log('Paul'); // string
console.log(42); // number
console.log(true); // boolean
console.log(null); // null
console.log(undefined); // undefined
console.log(42n); // bigint
console.log(Symbol('Paul')); // symbol

console.log(typeof " \" \n \t "); // string
console.log(typeof 42); // number
console.log(typeof true); // boolean
console.log(typeof null); // null
console.log(typeof undefined); // undefined
console.log(typeof 42n); // bigint
console.log(typeof Symbol('Paul')); // symbol


// The difference between null and undefined
// Both represent the absence of a value, null is intentional (programmer's intention) 
// undefined is unintentional (side effect of the language)

// This is correct
const a = null;

// This is conceptually wrong
const b = undefined;

let c = 'Paul';
c = 42;
// c = true;

const result = c !== '42';
console.log({ result });

