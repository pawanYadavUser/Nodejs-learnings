import { EventEmitter } from "./final/event-emitter/events.js";

//
// import { EventEmitter } from "events";
class Emitter extends EventEmitter {}

const myE = new Emitter();

myE.on("foo", () => {
  console.log("An event has occurred!");
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
  console.log("An event has occurred bar.");
  console.log(e);
  console.log(id);
});

myE.emit("foo");

myE.emit("bar", "paramter for bar", 34);
myE.emit("bar");
myE.emit("bar");
myE.emit("bar");
myE.emit("bar");
myE.emit("bar");
