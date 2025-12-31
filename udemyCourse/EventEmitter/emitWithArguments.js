import { EventEmitter } from "node:events";
const myEmitter = new EventEmitter();

// First listener
myEmitter.on("event", function firstListener() {
  console.log("Helloooo! first listener");
});
// Second listener
myEmitter.on("event", function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on("event", function thirdListener(...args) {
  const parameters = args.join(", ");
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners("event"));

myEmitter.emit("event", 1, 2, 3, 4, 5);

myEmitter.on("foo", () => {});
myEmitter.on("bar", () => {});

const sym = Symbol("symbol");
myEmitter.on(sym, () => {});

// Returns an array listing the events for which the emitter has registered listeners
console.log("eventNames: ", myEmitter.eventNames());
console.log("max listeners: ", myEmitter.getMaxListeners());
console.log(
  "listener count for event type: event - ",
  myEmitter.listenerCount("event")
);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener

myEmitter.once("foo1", () => console.log("a"));
myEmitter.prependOnceListener("foo1", () => console.log("b"));
myEmitter.emit("foo1");
myEmitter.emit("foo1");
