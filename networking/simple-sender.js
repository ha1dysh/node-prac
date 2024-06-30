const { Buffer } = require('node:buffer')
const net = require('node:net')

const connections = { host: '127.0.0.1', port: 3000 }
const socket = net.createConnection(connections,
	() => {
		const buffer = Buffer.from('Hi!')
		socket.write(buffer)
	})
