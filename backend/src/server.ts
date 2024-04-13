require('module-alias/register')
import express, { Application } from "express";
const app: Application = express();
require("dotenv").config();
// const cors = require('cors');
const http = require('http');
const port = process.env.PORT || 5000;
import cors from 'cors';
app.use(cors());
app.use(express.json());
const routes = require("@/src/routes");

app.use("/api", routes);

app.post("/signup", async (req, res) => {
	
})

const server = http.createServer(app);
const onError = (error: any) => {
	if (error.syscall !== 'listen') throw error;
	
	switch (error.code) {
		case 'EACCES':
			console.error(`Port ${port} requires elevated privileges`);
			process.exit(1);
			break;
		case 'EADDRINUSE':
			console.error(`Port ${port} is already in use`);
			process.exit(1);
			break;
		default:
			throw error;
	}
};

const onListening = () => {
	let addr = server.address();
	let bind = typeof addr === 'string' ? 'pipe ' + addr : addr.port;
	console.log('Server Listening on My custom port ' + bind);
};
server.listen(port, () => console.log(`Node JS server listening on port ${port}`));
server.on('error', onError);
server.on('listening', onListening);