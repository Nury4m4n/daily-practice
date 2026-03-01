/*
Instructions:
Complete the square sum function so that it squares each number passed into it and then sums the results together.

Codewars Kata:
    https://www.codewars.com/kata/515e271a311df0350d00000f
*/

const squareSum = numbers => numbers.reduce((sum, num) => sum + num * num, 0)

// Example
console.log(squareSum([1, 2, 2])) // Output: "9"