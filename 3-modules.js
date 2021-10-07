//commonJS, every file in node is a module by default.
// a module is an encapsulated code (only share minimum / only sharing what we want)

const { john, peter } = require("./4-names");

const sayHello = require("./5-utils");

const alt = require("./6-alt-exports");
require("./7-mind-grenade");
console.log(alt);

sayHello("Susan");
sayHello(john);
sayHello(peter);
