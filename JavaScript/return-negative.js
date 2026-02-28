/*
Instructions:
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Codewars Kata:
   https://www.codewars.com/kata/55685cd7ad70877c23000102
*/

const makeNegative = (num) => num > 0 ? -num : num

// Example
console.log(makeNegative(-10)); // Output: "-10"