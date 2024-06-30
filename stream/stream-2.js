const fsPromises = require('node:fs/promises');

(async () => {
	const fileHandleRead = await fsPromises.open('test.txt', 'r');
	const fileHandleWrite = await fsPromises.open('dest.txt', 'w');

	const streamRead = fileHandleRead.createReadStream({ highWaterMark: 64 * 1024 })
	const streamWrite = fileHandleWrite.createWriteStream()

	streamRead.on('data', (chunk) => {
		// console.log(chunk)
		// console.log(chunk.length); // 65536
		if (!streamWrite.write(chunk)) {
			streamRead.pause()
		}
	})

	streamWrite.on('drain', () => {
		streamRead.resume()
	})
})().catch(console.error)
