import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import 'dotenv/config';
import './config/data-source';
import swaggerUi from 'swagger-ui-express';
// import swaggerSpec from './config/swagger';
import * as swaggerDocument from './config/swagger.json';

import indexRouter from './routes/index-router';
import userRouter from './routes/users-router';

const app = express();

app.set('view engine', 'pug');

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/my-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(favicon(path.join(process.cwd(), 'public', 'images', 'favicon.png')));

app.use('/', indexRouter);
app.use('/users', userRouter);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    response.locals.message = error.message;
    response.locals.error = request.app.get('env') === 'development' ? error : {};
    response.status(500);
    response.render('error', { pageTitle: 'Error View' });
});

export default app;