/*
Instructions:
You get an array of numbers, return the sum of all of the positives ones.

Codewars Kata:
   https://www.codewars.com/kata/5715eaedb436cf5606000381
*/

const positiveSum = (arr) => arr.reduce((sum, num) => num > 0 ? sum + num : sum, 0)

console.log(positiveSum([1, -4, 7, 12])) // Output: "20"