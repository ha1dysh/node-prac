const { Writable } = require('node:stream');

class FileWriteStream extends Writable {
	constructor({ highWaterMark, fileName }) {
		super({ highWaterMark });
		this.fileName = fileName;
	}
}

const stream = new FileWriteStream({ highWaterMark: 64 * 1024, fileName: 'dest.txt' })
stream.write(Buffer.from('Hi!'))
