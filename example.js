// // ES6 way below -newer but may not always work yet
// import fs from "fs";
//common js syntax below
const fs = require("fs");

var output = fs.readFileSync("data.txt", "utf8");

console.log("output", output);

// output <Buffer 6d 61 72 6b 20 6a 6f 6e 73 6f 6e 20 77 61 66 66 6c 65 20 69 72 6f6e 20 20 20 20 38 30 20 20 32 0a 6d 61 72 6b 20 6a 6f 6e 73 6f 6e 20 62 6c 65 6e64 ... 128 more bytes>
