import { Buffer } from "buffer";

const memoryContainer = Buffer.alloc(4);

console.log(memoryContainer);
console.log("first element of the buffer : ", memoryContainer[0]);

memoryContainer[0] = 0x45;
memoryContainer[1] = 0xc5;
memoryContainer[2] = 0xf5;
// memoryContainer[3] = -34; not correct way to do it
//try using build-in methods to store negative numbers
memoryContainer.writeInt8(-34, 3);

console.log(memoryContainer[0]);
console.log(memoryContainer[1]);
console.log(memoryContainer[2]);
// console.log(memoryContainer[3]);
console.log(memoryContainer.readInt8(3)); // this takes care of 2's complement of negative number on its own

console.log(memoryContainer.toString("hex"));
console.log(memoryContainer.toString("latin1"));

const buffer = Buffer.from([0x48, 0x69, 0x21]);
console.log(buffer.toString("utf-8"));
console.log(buffer.toString("utf16le"));

const buffer2 = Buffer.from("Hi!", "utf-8");
console.log(buffer2.toString("utf-8"));
console.log(buffer2);

// const buffer3 = Buffer.from("E29DA4", "hex");
const buffer3 = Buffer.from("F09F9892", "hex");

// F0 9F 98 92
console.log(buffer3.toString("utf-8"));
console.log(buffer3);
