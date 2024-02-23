import { Server, createServer, IncomingMessage, ServerResponse } from 'http';
import * as fs from 'fs';
import * as path from 'path';

const server: Server = createServer((request: IncomingMessage, response: ServerResponse) => {
    if (request.url === '/') {
        const indexPath = path.join(process.cwd(), 'public', 'index.html');

        fs.readFile(indexPath, (error: NodeJS.ErrnoException | null, data: Buffer) => {
            if (error) {
                response.statusCode = 404;
                response.setHeader('content-type', 'text/plain');
                response.write('Resource not found');
                response.end();
                return;
            } else {
                response.setHeader('content-type', 'text/html');
                response.statusCode = 200;
                response.write(data);
                response.end();
            }
        });
    } else if (request.url?.startsWith('/download')) {
        const fileNumber = request.url.split('/')[2];
        const filePath = path.join(process.cwd(), 'files', `${fileNumber}.pdf`);
        serveFile(filePath, 'application/pdf', response, false);
        // serveFile(filePath, 'application/pdf', response, true);
    } else {
        response.setHeader('content-type', 'text/plain');
        response.statusCode = 404;
        response.write('Resource not found');
        response.end();
    }

});

function serveFile(filePath: string, contentType: string, response: ServerResponse, isDownload: boolean = false) {
    const fileName = path.basename(filePath);
    const readStream = fs.createReadStream(filePath);

    readStream.on('open', () => {
        response.setHeader('content-type', contentType);
        if (isDownload) {
            response.setHeader('content-disposition', `attachment; filename="${fileName}"`);
        }
        response.statusCode = 200;
        readStream.pipe(response);
    });

    readStream.on('error', (err) => {
        response.setHeader('content-type', 'text/plain');
        response.statusCode = 404;
        response.write('File not found');
        response.end();
    });
}

server.listen(3000, () => {
    const address = server.address();
    const port = typeof address === 'string' ? address : address?.port;
    console.log(`Server started listening on port ${port}`);
});

server.on('error', (error: Error) => {
    console.error('Error occurred: ', error.message);
});