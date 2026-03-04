/*
Instructions:
Create a method all which takes two params:

a sequence
a function

and returns true if the function in the params returns true for every element in the sequence. 
Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.

Codewars Kata:
   https://www.codewars.com/kata/54598d1fcbae2ae05200112c
*/

const all = (arr, fun) => arr.every(fun);

console.log(
  all([1, 2, 3, 4, 5], function (v) {
    return v < 9;
  }),
); // Output: "true"
