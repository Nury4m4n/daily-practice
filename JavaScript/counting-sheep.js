/*
Instructions:
Consider an array/list of sheep where some sheep may be missing from their place.
We need a function that counts the number of sheep present in the array (true means present).

Codewars Kata:
    https://www.codewars.com/kata/54edbc7200b811e956000556
*/

const countSheeps = (sheep) => sheep.filter(Boolean).length;

// Example
console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ]),
); // Output: "17"
