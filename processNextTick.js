console.log("Start");

process.nextTick(() => {
  console.log("Inside nextTick callback");
});

console.log("End");
