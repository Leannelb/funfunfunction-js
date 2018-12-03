// // ES6 way below -newer but may not always work yet
// import fs from "fs";
//common js syntax below
const fs = require("fs");

var output = fs.readFileSync("data.txt");

console.log("output", output);
