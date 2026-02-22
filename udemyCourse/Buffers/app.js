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

//Buffer and character  encodings
const buffer5 = Buffer.from("1a76", "hex");
console.log(buffer5.toString("hex"));
console.log(Buffer.from("1ag123", "hex").toString("hex"));
// Prints <Buffer 1a>, data truncated when first non-hexadecimal value
// ('g') encountered.)
console.log(Buffer.from("1a7", "hex").toString("hex"));
// Prints <Buffer 1a>, data truncated when data ends in single digit ('7').)

//Buffers and typed arrays
// A TypedArray object describes an array-like view of an underlying binary data buffer. T
const buffer6 = Buffer.from("3656", "hex");
const intArray = new Int8Array(buffer6);

console.log(intArray.length);
console.log(intArray.BYTES_PER_ELEMENT);
console.log(intArray.toString());

intArray.forEach((ele) => {
  console.log(ele * 2);
});

const int16Array = new Int16Array(2);
int16Array[0] = 42;
console.log(int16Array[4]);

//2nd way to create typedArray from buffer
const buf = Buffer.from("hello", "utf16le");
const uint16array = new Uint16Array(
  buf.buffer,
  buf.byteOffset,
  //   2
  buf.length / Uint16Array.BYTES_PER_ELEMENT
);
console.log(uint16array.toString());

//byteOffset is the number of bytes from the start of the underlying ArrayBuffer where this view (buf) begins.
// In simple words:
// It tells JavaScript where your actual data starts inside the raw memory buffer.
// In Node.js:
// Buffer is a view over an ArrayBuffer
// Multiple Buffers can share the same ArrayBuffer
// Each Buffer may start at a different byte position
/**
 * const uint16array = new Uint16Array(
  buf.buffer,                 // shared ArrayBuffer
  buf.byteOffset,             // start reading from here
  buf.length / Uint16Array.BYTES_PER_ELEMENT
);
 */
