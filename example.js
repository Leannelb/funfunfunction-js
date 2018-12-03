// // ES6 way below -newer but may not always work yet
// import fs from "fs";
//common js syntax below
const fs = require("fs");

var output = fs
  .readFileSync("data.txt", "utf8")
  .trim() //gets rid of the extra extra line at the end
  .split("\n") //splits it up with a new line
  .map(line => line.split("\t")); //this has given us an array of arrays!!!

console.log("output", output);

// output
// mark jonson waffle iron    80  2
// mark jonson blender    200  1
// mark jonson knife    10  4
// Nikita Smith    waffle iron 80  1
// Nikita Smith    knife 10  2
// Nikita Smith    pot 20  3
