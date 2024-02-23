import express, { Request, Response } from 'express';
import path from 'path';
import { Server, createServer } from 'http';

const app = express();

const employees = [
    { id: 1, name: "Manish" },
    { id: 2, name: "Abhijeet" },
    { id: 3, name: "Ram" },
    { id: 4, name: "Abhishek" },
    { id: 5, name: "Ramakant" }
];

app.get('/', (request: Request, response: Response) => {
    response.sendFile(path.join(process.cwd(), 'public', 'index.html'));
});

app.get('/contact', (request: Request, response: Response) => {
    response.sendFile(path.join(process.cwd(), 'public', 'contact.html'));
});

app.get('/about', (request: Request, response: Response) => {
    response.sendFile(path.join(process.cwd(), 'public', 'about.html'));
});

app.get('/data', (request: Request, response: Response) => {
    const data = employees;
    response.json(data);
});

// Hosting
const server: Server = createServer(app);

server.listen(3000);

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
