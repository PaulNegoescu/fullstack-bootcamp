"use strict";
// Primitive data types
console.log("Paul"); // string
console.log(42); // number
console.log(true); // boolean
console.log(null); // null
console.log(undefined); // undefined
console.log(42n); // bigint
console.log(Symbol("Paul")); // symbol

console.log(typeof ' " \n \t '); // string
console.log(typeof 42); // number
console.log(typeof true); // boolean
console.log(typeof null); // null
console.log(typeof undefined); // undefined
console.log(typeof 42n); // bigint
console.log(typeof Symbol("Paul")); // symbol

// The difference between null and undefined
// Both represent the absence of a value, null is intentional (programmer's intention)
// undefined is unintentional (side effect of the language)

// This is correct
const a = null;

// This is conceptually wrong
const b = undefined;

let c = "Paul";
c = 42;
// c = true;

console.log({ d });
var d = "this is also global";

const result = c !== "42";
// console.log({ result });

// window.ceva = 'Test';

/** Scope
 *
 * 1. Global scope
 *      - Implicit: declaram o denumire DIRECT intr-un fisier inclus in html in mod standard
 *      - Explicit: cream o proprietate pe obiectul global: globalThis, in browser: window, in Node: global
 * 2. Function scope (local scope)
 *      - Orice denumire creata in interiorul (definitia) unei functii
 * 3. Block scope
 *      - Orice denumire declarata cu const, let sau class, intre orice set de acolade
 * 4. Module scope
 *       - Orice denumire declarata intr-un fisier care e inclus in html ca si modul
 */

testScope();
function testScope() {
  // console.log(result);

  const result = 1;
}

if (true) {
  const blockScope = "Paul";

  console.log(blockScope);
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// let deferred;

// console.log(deferred);

// deferred = 10;

// console.log(i);
// console.log(blockScope);

// Function declaration
function add(num1, num2) {
  return num1 + num2;
}

console.clear();

const res = add(400, 600);
console.log(res);

// Function expression
const add2 = function (num1, num2, num3) {
  return num1 + num2 + num3;
};

console.log(add2(1, 2, 3));

const add3 = add;

console.log(add3(30, 50));

function exp(base, exponent) {
  return base ** exponent;
}

console.log(exp(2, 8));

// Callback
function printMathOperation(callback) {
  console.log(callback(5, 2));
}

printMathOperation(add);
printMathOperation(exp);

// Arrow function
printMathOperation((num1, num2) => num1 / num2);
printMathOperation(function (num1, num2) {
  return num1 / num2;
});

function isEven(num) {
  // if (num % 2 === 0) {
  //   return true;
  // } else {
  //   return false;
  // }

  // if (num % 2 === 0) {
  //   return true;
  // }
  // 
  // return false;

  // return num % 2 === 0 ? true : false;

  // return num % 2 === 0;
  return !(num % 2 === 1);
}

console.log(isEven(5));
