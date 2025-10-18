import fs from "fs";

function someAsyncOperation(callback) {
  //poll phase
  fs.readFile("./notes.txt", callback);
}

const timeoutScheduled = Date.now();

setTimeout(() => {
  //timer phase
  const delay = Date.now() - timeoutScheduled;
  console.log(`${delay} ms have passed since i was scheduled`);
}, 100);

//do someAsyncOperation which takes 95ms to completed
someAsyncOperation(() => {
  const startCallBack = Date.now();
  //do something that will take 10 ms
  while (Date.now() - startCallBack < 10) {
    //do nothing
    console.log("Inside poll phase");
  }
});
