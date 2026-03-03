/*
Instructions:
Write a function that removes the spaces from the string, then return the resultant string.

Codewars Kata:
   https://www.codewars.com/kata/57eae20f5500ad98e50002c5
*/

const noSpace = (x) => x.split(" ").join("");

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B")); // Output: "8j8mBliB8gimjB8B8jlB"
