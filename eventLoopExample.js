import fs from "fs";

console.log("1. Start");

// Immediate callback -> goes to check phase
setImmediate(() => {
  console.log("2. setImmediate");
});

// I/O operation (file read) -> goes to I/O callback or polll phase
fs.readFile("../notes.txt", (data) => {
  console.log(`2. File Read Complete ${data}}`);
});

// Timer callback -> goes to timer phase
setTimeout(() => {
  console.log("4. setTimeout");
}, 0);

console.log("5. End");
