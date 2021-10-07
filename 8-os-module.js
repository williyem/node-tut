const os = require("os");
const currentOs = {
  name: os.type(),
  releases: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOs);
