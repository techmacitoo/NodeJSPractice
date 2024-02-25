import { Server, createServer } from 'http';
import app from '../app';

// Hosting
const server: Server = createServer(app);

server.listen(process.env.PORT || 3000);

function onError(err: Error) {
    console.error(err);
}

function onListening() {
    const address = server.address();
    const port = typeof address === 'string' ? address : address?.port;
    console.log(`Express Server started on port: ${port}`);
}

server.on('error', onError);
server.on('listening', onListening);
