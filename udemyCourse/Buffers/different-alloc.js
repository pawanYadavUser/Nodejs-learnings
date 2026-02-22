import { Buffer } from "buffer";

const b1 = Buffer.alloc(1000);
const b2 = Buffer.allocUnsafe(1000);

console.log("Buffer internal buffer size : ", Buffer.poolSize);

for (let i = 0; i < b2.length; i++) {
  console.log(`Element at position ${i} has values : ${b2[i]}`);
}

console.log("Buffer internal buffer size : ", Buffer.poolSize);
