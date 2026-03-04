/*
Codewars Kata:
   https://www.codewars.com/kata/56c2578be8b139bd5c001bd8
*/
let candidates = [
  {
    desiresEquity: true,
    currentLocation: "New York",
    desiredLocations: ["San Francisco", "Los Angeles", "Colorado"],
  },
];

let job = {
  equityMax: 1.2,
  locations: ["New York", "Kentucky"],
};

const match = (job, candidates) => {
  return candidates.filter((candidate) => {
    const equityMatch = !(candidate.desiresEquity && job.equityMax === 0);

    const locationMatch = job.locations.some(
      (location) =>
        location === candidate.currentLocation ||
        candidate.desiredLocations.includes(location),
    );

    return equityMatch && locationMatch;
  });
};
console.log(match(job, candidates));
