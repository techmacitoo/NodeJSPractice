import { Request, Response } from 'express';

import { getAllEmployees } from '../data-access';

export const index = (request: Request, response: Response) => {
    response.render('employees/index', { pageTitle: 'Employees View', empList: getAllEmployees() });
}