const fsPromises = require('node:fs/promises');
const { pipeline } = require('node:stream');

// (async () => {
// 	console.time('stream')
// 	const fileHandleRead = await fsPromises.open('test.txt', 'r');
// 	const fileHandleWrite = await fsPromises.open('dest.txt', 'w');

// 	const streamRead = fileHandleRead.createReadStream();
// 	const streamWrite = fileHandleWrite.createWriteStream();

// 	streamRead.pipe(streamWrite);

// 	streamRead.on('end', () => {
// 		fileHandleRead.close();
// 		fileHandleWrite.close();
// 		console.timeEnd('stream');
// 	})
// })().catch(console.error);

(async () => {
	console.time('stream')
	const fileHandleRead = await fsPromises.open('test.txt', 'r');
	const fileHandleWrite = await fsPromises.open('dest.txt', 'w');

	const streamRead = fileHandleRead.createReadStream()
	const streamWrite = fileHandleWrite.createWriteStream()

	pipeline(streamRead, streamWrite, (err) => {
		if (err) {
			console.error(err);
		}

		fileHandleRead.close();
		fileHandleWrite.close();
		console.timeEnd('stream');
	})

})().catch(console.error)
// pipeline handles the error and destroys the streams
