const { Buffer } = require('buffer')
const fs = require('fs/promises');


(async () => {
	// try {
	// const content = await fs.readFile('text.txt')
	// console.log(content.toString('utf-8'));

	// await fs.copyFile('text.txt', 'text_copy.txt')
	// } catch (e) {
	// console.log(e);
	// }

	// try {
	// 	const isFileExists = await fs.open('test.txt', 'r')
	// 	isFileExists.close()
	// 	console.log('file exists')
	// } catch (error) {
	// 	const newFile = await fs.open('test.txt', 'w')
	// 	await newFile.close()
	// 	console.log('file created')
	// }

	// try {
	// 	await fs.unlink('test.txt')
	// // also more powerful fs.rm() can be used to remove a file or a directory
	// } catch (e) {
	// 	if (e.code === 'ENOENT') {
	// 		console.log('file does not exist')
	// 	} else {
	// 		console.log('error while deleting file')
	// 		console.log(e)
	// 	}
	// }

	const textFile = await fs.open('text.txt', 'r');

	textFile.on('change', async () => {
		try {
			// get the size of a file
			const fileSize = (await textFile.stat()).size;
			// allocate buffer with the size of the file
			const buffer = Buffer.alloc(fileSize);
			// location we start filling buffer
			const offset = 0;
			// how many bytes we read
			const length = buffer.byteLength;
			// position we start reading the file from
			const position = 0;
			// reading whole file (from start to end)
			await textFile.read(buffer, offset, length, position);

			console.log(buffer.toString('utf-8'));
		} catch (e) {
			console.log(e);
		}
	})

	const watcher = fs.watch('text.txt');
	for await (const event of watcher) {
		if (event.eventType === 'change') {
			textFile.emit('change')
		}
	}
})();
