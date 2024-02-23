import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';

import indexRouter from './routes/index-router';
import employeesRouter from './routes/employees-router';

const app = express();

app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(favicon(path.join(process.cwd(), 'public', 'images', 'favicon.png')));

app.use('/', indexRouter);
app.use('/employees', employeesRouter);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    response.locals.message = error.message;
    response.locals.error = request.app.get('env') === 'development' ? error : {};
    response.status(500);
    response.render('error', { pageTitle: 'Error View' });
});

export default app;