const { Buffer } = require('buffer')

// const buffer = Buffer.alloc(4) // 4 bytes (32 bits)
// console.log(buffer);
// console.log(buffer[0]);

// const buffer = Buffer.alloc(4)
// buffer.writeInt8(-32, 0) // write negative number to 4th byte
// console.log(buffer.readInt8(0)); // read negative number in 4th byte

// const buffer = Buffer.alloc(4)
// buffer[0] = 0xf4
// buffer[1] = 0x34
// buffer[2] = 0x00
// buffer[3] = 0xff
// console.log(buffer);
// console.log(buffer[0]);
// console.log(buffer[1]);
// console.log(buffer[2]);
// console.log(buffer[3]);
// console.log(buffer.toString('hex'));

// const buffer = Buffer.alloc(3)
// buffer[0] = 0x48
// buffer[1] = 0x69
// buffer[2] = 0x21
// console.log(buffer.toString('utf-8'));

// const buffer = Buffer.from([0x48, 0x69, 0x21])
// console.log(buffer.toString('utf-8'));

// const buffer = Buffer.from('486921', 'hex')
// console.log(buffer.toString('utf-8'));

const buffer = Buffer.from('Hi!', 'utf-8')
console.log(buffer);

