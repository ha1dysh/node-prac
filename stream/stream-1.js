const { Buffer } = require('node:buffer')
const fsPromises = require('node:fs/promises');
const fs = require('node:fs');

// Execution: 26s
// CPU: 100% (1 core)
// Memory: 45MB
// (async () => {
// 	const fileHandle = await fsPromises.open('test.txt', 'w');
// 	console.time('write many');
// 	for (let i = 0; i < 1_000_000; i++) {
// 		await fileHandle.write(` ${i} `);
// 	};
// 	console.timeEnd('write many');
// 	fileHandle.close()
// })();

// Execution: 0.7s
// CPU: 100% (1 core)
// Memory: 200MB
// (async () => {
// 	const fileHandle = await fsPromises.open('test.txt', 'w');
// 	const stream = fileHandle.createWriteStream()
// 	console.time('write many');
// 	for (let i = 0; i < 1_000_000; i++) {
// 		const buffer = Buffer.from(` ${i} `, 'utf-8')
// 		stream.write(buffer)
// 	};
// 	console.timeEnd('write many');
// 	fileHandle.close()
// })();

// Execution: 0.7s
// CPU: 100% (1 core)
// Memory: 50MB
(async () => {
	console.time('write many');
	const fileHandle = await fsPromises.open('test.txt', 'w');
	const stream = fileHandle.createWriteStream()

	let i = 0
	const amount = 10_000_000
	const writeMany = () => {
		while (i++, i < amount) {
			const buffer = Buffer.from(` ${i} \n`, 'utf-8')
			if (i === amount - 1) {
				return stream.end(buffer)
			} else if (!stream.write(buffer)) {
				break;
			};
		}
	};
	writeMany();

	stream.on('drain', () => {
		writeMany()
	})

	stream.on('finish', () => {
		fileHandle.close()
		console.timeEnd('write many')
	})
})()
