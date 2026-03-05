/*
Instructions:
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative. If the array is empty, return 0.

Codewars Kata:
   https://www.codewars.com/kata/53dc54212259ed3d4f00071c
*/

const sum = (numbers) => numbers.reduce((sum, num) => sum + num, 0);

console.log(sum([1, -4, 7, 12])); // Output: "16"
