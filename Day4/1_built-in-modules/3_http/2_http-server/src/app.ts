// import { Server, createServer, IncomingMessage, ServerResponse } from 'http';

// const server: Server = createServer((request: IncomingMessage, response: ServerResponse) => {
//     // console.log(request.url);
//     // console.log(request.headers);
//     // response.write('Hello from Node.js HTTP server...');
//     // response.end();

//     response.setHeader('content-type', 'text/html');
//     // response.setHeader('content-type', 'text/plain');
//     // response.setHeader('content-type', 'application/json');
//     // response.setHeader('content-type', 'application/pdf');

//     response.write('<h1>Hello from Node.js HTTP server</h1>');
//     response.end();
// });

// server.listen(3000, () => {
//     const address = server.address();
//     const port = typeof address === 'string' ? address : address?.port;
//     console.log(`Server started listening on port ${port}`);
// });

// server.on('error', (error: Error) => {
//     console.error('Error occurred: ', error.message);
// });

// -----------------------------------------------------------------

import { Server, createServer, IncomingMessage, ServerResponse } from 'http';
import * as fs from 'fs';
import * as path from 'path';

const server: Server = createServer((request: IncomingMessage, response: ServerResponse) => {
    const indexPath = path.join(process.cwd(), 'public', 'index.html');

    fs.readFile(indexPath, (error: NodeJS.ErrnoException | null, data: Buffer) => {
        if (error) {
            response.statusCode = 404;
            response.setHeader('content-type', 'text/html');
            response.write('<h1>Resource not found</h1>');
            response.end();
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