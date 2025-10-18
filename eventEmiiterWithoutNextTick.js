import EventEmitter from "node:events";

// You can't emit an event from the constructor immediately because the script
//  will not have processed to the point
//  where the user assigns a callback to that event.

class MyEmitter extends EventEmitter {
  constructor() {
    super();
    this.emit("event");
  }
}

const myEmitter = new MyEmitter();
myEmitter.on("event", () => {
  console.log("an event occurred!");
});
