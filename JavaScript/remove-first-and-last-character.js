/*
Instructions:
Your goal is to write a function that removes the first and last characters of a string. You're given one parameter, the original string.

Important: Your function should handle strings of any length ≥ 2 characters. For strings with exactly 2 characters, return an empty string.

Codewars Kata:
    https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0
*/

const removeChar = str => str.slice(1, -1);

// Example
console.log(removeChar("eloquent")) // Output: "loquen"