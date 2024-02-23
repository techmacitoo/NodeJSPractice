import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import { Server, createServer } from 'http';
import favicon from 'serve-favicon';
import logger from 'morgan';

const app = express();

app.set('view engine', 'pug');

const employees = [
    { id: 1, name: "Manish" },
    { id: 2, name: "Abhijeet" },
    { id: 3, name: "Ram" },
    { id: 4, name: "Abhishek" },
    { id: 5, name: "Ramakant" }
];

app.use(logger('dev'));
app.use(favicon(path.join(process.cwd(), 'public', 'images', 'favicon.png')));

// app.use((request: Request, response: Response, next: NextFunction) => {
//     console.log("Request - Middleware One");
//     next();
//     console.log("Response - Middleware One");
// });

// app.use((request: Request, response: Response, next: NextFunction) => {
//     console.log("Request - Middleware Two");
//     next();
//     console.log("Response - Middleware Two");
// });

// app.use((request: Request, response: Response, next: NextFunction) => {
//     const startTime = new Date().getTime();
//     next();
//     response.on('finish', () => {
//         const endTime = new Date().getTime();
//         console.log(`Request URL: ${request.url} - Total Time: ${endTime - startTime}ms`);
//     });
// });

app.get('/', (request: Request, response: Response) => {
    // console.log("Request Handler Executed");
    // throw new Error('Something went wrong');
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

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    response.locals.message = error.message;
    response.locals.error = request.app.get('env') === 'development' ? error : {};
    response.status(500);
    response.render('error', { pageTitle: 'Error View' });
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
