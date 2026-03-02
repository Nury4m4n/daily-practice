/*
Instructions:
Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Codewars Kata:
    https://www.codewars.com/kata/57a0e5c372292dd76d000d7e
*/

const repeatStr = (n, s) => s.repeat(n);

// Example
console.log(repeatStr(2, "Hello")); // Output: "HelloHello"