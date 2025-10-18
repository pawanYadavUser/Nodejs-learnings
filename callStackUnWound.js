console.log("A");

process.nextTick(() => {
  console.log("B - nextTick");
});

console.log("C");

// Call stack execution:
// "A" logs → synchronous
// process.nextTick() schedules callback → async but runs ASAP
// "C" logs → synchronous
// Call stack is now empty → unwind complete
// Now nextTick runs → logs "B - nextTick"
