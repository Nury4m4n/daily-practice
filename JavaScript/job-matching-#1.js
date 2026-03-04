/*
Codewars Kata:
   https://www.codewars.com/kata/56c22c5ae8b139416c00175d
*/
let candidate = {
  minSalary: 120000,
};

let job = {
  maxSalary: 140000,
};

const match = (candidate, job) => {
  if (candidate?.minSalary === null || job?.maxSalary == null)
    throw new Error("Missing salary information");
  return job.maxSalary >= candidate.minSalary * 0.9;
};

console.log(match(candidate, job)); // Output: "true"
