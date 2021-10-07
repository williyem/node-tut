const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first} and ${second}`,
  { flag: "a" }
);

const result = readFileSync("./content/result-sync.txt", "utf8");

console.log(result);
