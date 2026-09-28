// Operators---

// truthy values -
// falsy values -> null, undefined, 0, false, NaN, "", document.all, 0n

// 1. Arithmetic operators

// + - * / % **

// 2. Logical operators

// -> && || !

// 3. Assignment
// 4. Comparison

// == === <= >= != !==

// 5. Ternary

// ?:

// 6. Nullish Coelascing-
// -> ??

// methods---

// 1. Mutable methods
// push,
// arr.push("final");
// pop,
// arr.pop();
// shift,
// arr.shift();
// unshift,
// arr.unshift(33333);
// splice,
// arr.splice(2, 4);
// sort

// arr.sort((a, b) => a - b);

// console.log(arr);

// 2. Immutable or Return new array

// map,
// let ans = arr.map((val, index) => val);

// filter,
// let ans = arr.filter((val, index) => val === 300);

// flatmap,
let arr2 = [5, 6, 7, 8, [45, 67, 89, [56, 78, 90, [34, 45, 56, 67]]]];

// let ans = arr2.flatMap((val) => val);

// forEach
// let ans = arr.forEach((val) => {
//   console.log(val);
// });

// let re = arr.slice(2, 7);

// console.log(ans);

// 3. returns a value

// find
// let ans = arr.find((val) => val == 300);

// findIndex

// let ans = arr.findIndex((val) => val == 67);

// reduce,

let arr = [300, 300, 34, 100, 10, 600, 67, 45, 500];

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

// let ans = arr.reduce((accumulator, value) => accumulator + value, 0);

// console.log(ans);

// Nullish

// Promises---------

// timers--

// console.log("first");
// setTimeout(() => {
//   console.log("in timeout 1");
// }, 0);
// console.log("second");

// let party = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let isParty = true;
//     if (isParty) {
//       resolve("Party hogi..");
//     }
//     reject("No money..");
//   }, 2000);
// });
// party.then((val) => console.log(val));

// setTimeout(() => {
//   console.log("in timeout 2");
// }, 2000);

// console.log("third");

// console.log(party);
// console.log("last");

// let party = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let isParty = false;

//     if (isParty) {
//       resolve("Party hogi..");
//     }

//     reject("No money..");
//   }, 1000);
// });

// party
//   .then((val) => {
//     console.log(val);
//     console.log("hello");
//   })
//   .catch((error) => console.log(error));

// async await

// let resolve = async () => {
//   try {
//     let res = await party;
//     console.log(res);
//     console.log("hello");
//   } catch (error) {
//     console.log(error);
//   }
// };

// resolve();

let trial = async () => {
  if (false) {
    return 10;
  } else {
    throw new Error("kuch gadbad hai..");
  }
};

let ans = trial();

console.log(ans);
