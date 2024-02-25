import { Request, Response } from 'express';

export const index = (request: Request, response: Response) => {
    response.render('home/index', { pageTitle: 'Index View' });
}

export const contact = (request: Request, response: Response) => {
    response.render('home/contact', { pageTitle: 'Contact View' });
}

export const about = (request: Request, response: Response) => {
    response.render('home/about', { pageTitle: 'About View' });
}