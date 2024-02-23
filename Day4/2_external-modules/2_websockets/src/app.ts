import { Server, createServer, IncomingMessage, ServerResponse } from 'http';
import * as fs from 'fs';
import * as path from 'path';
import { server as WebSocketServer } from 'websocket';
import { sEmitter } from './string-emitter';

const server: Server = createServer((request: IncomingMessage, response: ServerResponse) => {
    const indexPath = path.join(process.cwd(), 'public', 'index.html');

    fs.readFile(indexPath, (error: NodeJS.ErrnoException | null, data: Buffer) => {
        if (error) {
            response.statusCode = 404;
            response.setHeader('content-type', 'text/plain');
            response.statusCode = 404;
            response.end("Page not found");
            return;
        } else {
            response.setHeader('content-type', 'text/html');
            response.statusCode = 200;
            response.write(data);
            response.end();
        }
    });
});

server.listen(3000, () => {
    const address = server.address();
    const port = typeof address === 'string' ? address : address?.port;
    console.log(`Server started listening on port ${port}`);
});

server.on('error', (error: Error) => {
    console.error('Error occurred: ', error.message);
});

// ------------------------------ WebSocket Code Starts
const wsServer = new WebSocketServer({
    httpServer: server
});

interface Client {
    sendUTF(message: string): void;
}

let clients: { [id: number]: Client } = {};
let count = 1;

sEmitter.on('data', (s: string) => {
    Object.values(clients).forEach((client: Client) => {
        client.sendUTF(s);
    });
});

wsServer.on('request', (request) => {
    const connection = request.accept('echo-protocol');

    const id = count++;
    clients[id] = connection;
    console.log(`Connection Accepted: [${id}]`);

    connection.on('message', (msg) => {
        if (msg.type === 'utf8') {
            console.log(`Client said: [${msg.utf8Data}]`);
            connection.sendUTF('Data from Server...');
        }
    });

    connection.on('close', () => {
        delete clients[id];
        console.log(`Connection Closed: [${id}]`);
    });
});