/*
Instructions:
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

Codewars Kata:
   https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
*/

const abbrevName = (name) =>
  name
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join(".");

console.log(abbrevName("Zee Yamz")); // Output: Z.Y
