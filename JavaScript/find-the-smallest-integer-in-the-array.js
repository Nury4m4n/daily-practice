/*
Instructions:
Given an array of integers your solution should find the smallest integer.

Codewars Kata:
   https://www.codewars.com/kata/55a2d7ebe362935a210000b2
*/

const findSmallestInt = (arr) => Math.min(...arr);

console.log(findSmallestInt([34, 15, 88, 2])); // Output: "2"
