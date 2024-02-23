import express, { Request, Response } from 'express';
// import path from 'path';
import { Server, createServer } from 'http';

const app = express();

app.set('view engine', 'pug');

const employees = [
    { id: 1, name: "Manish" },
    { id: 2, name: "Abhijeet" },
    { id: 3, name: "Ram" },
    { id: 4, name: "Abhishek" },
    { id: 5, name: "Ramakant" }
];

app.get('/', (request: Request, response: Response) => {
    response.render('index', { pageTitle: 'Index View' });
});

app.get('/contact', (request: Request, response: Response) => {
    response.render('contact', { pageTitle: 'Contact View' });
});

app.get('/about', (request: Request, response: Response) => {
    response.render('about', { pageTitle: 'About View' });
});

app.get('/employees', (request: Request, response: Response) => {
    response.render('employees/index', { pageTitle: 'Employees View', empList: employees });
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
