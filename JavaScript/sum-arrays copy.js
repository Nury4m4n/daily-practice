/*
Instructions:
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Codewars Kata:
   https://www.codewars.com/kata/5583090cbe83f4fd8c000051
*/

const digitize = (n) => n.toString().split("").reverse().map(Number);

console.log(digitize(35221));
