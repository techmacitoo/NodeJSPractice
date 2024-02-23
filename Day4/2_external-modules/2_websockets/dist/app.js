"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const http_1 = require("http");
const fs = tslib_1.__importStar(require("fs"));
const path = tslib_1.__importStar(require("path"));
const websocket_1 = require("websocket");
const string_emitter_1 = require("./string-emitter");
const server = (0, http_1.createServer)((request, response) => {
    const indexPath = path.join(process.cwd(), 'public', 'index.html');
    fs.readFile(indexPath, (error, data) => {
        if (error) {
            response.statusCode = 404;
            response.setHeader('content-type', 'text/plain');
            response.statusCode = 404;
            response.end("Page not found");
            return;
        }
        else {
            response.setHeader('content-type', 'text/html');
            response.statusCode = 200;
            response.write(data);
            response.end();
        }
    });
});
server.listen(3000, () => {
    const address = server.address();
    const port = typeof address === 'string' ? address : address === null || address === void 0 ? void 0 : address.port;
    console.log(`Server started listening on port ${port}`);
});
server.on('error', (error) => {
    console.error('Error occurred: ', error.message);
});
// ------------------------------ WebSocket Code Starts
const wsServer = new websocket_1.server({
    httpServer: server
});
let clients = {};
let count = 1;
string_emitter_1.sEmitter.on('data', (s) => {
    Object.values(clients).forEach((client) => {
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
//# sourceMappingURL=app.js.map