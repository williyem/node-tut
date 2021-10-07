const path = require("path");

console.log(path.sep);

const filePath = path.join("./content", "content", "text.tx");

console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "sub", "text.txt");

console.log(absolute);
