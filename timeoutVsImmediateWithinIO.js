import fs from "fs";

fs.readFile("./timeoutVsImmediateWithinIO", () => {
  setTimeout(() => {
    console.log("timeout");
  }, 0);

  setImmediate(() => {
    console.log("Immediate");
  });
});
