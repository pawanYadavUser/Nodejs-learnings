// import { EventEmitter } from "./final/event-emitter/events.js";
//
import { EventEmitter, errorMonitor } from "events";
class Emitter extends EventEmitter {}

const myE = new Emitter({ captureRejections: true });

myE.on("foo", () => {
  console.log("An event has occurred!  1");
});

myE.on("foo", () => {
  console.log("An event has occurred 2");
});

myE.on("foo", (e) => {
  console.log("An event with parameter has occurred");
  console.log(e);
});

// myE.on("bar", () => {
//   console.log("An event has occurred bar.");
// });
myE.once("bar", (e, id) => {
  setImmediate(() => {
    console.log("An event has occurred bar.");
    console.log(e);
    console.log(id);
  });
});

myE.emit("foo");
myE.emit("bar", "paramter for bar", 34);

console.log("Testing for asynchronouse and synchronous part!");

//Error events
// myE.emit("error", new Error("Whoops!"));

myE.emit("bar");
myE.emit("bar");
myE.emit("bar");
myE.emit("bar");
myE.emit("bar");

myE.on(errorMonitor, (err) => {
  console.log(err);
});

//Capture rejections of promises
myE.on("something", async (value) => {
  throw new Error("kaboom");
});

myE.emit("something");
// myE.on("error", console.log);
myE[Symbol.for("nodejs.rejection")] = console.log;
