import { Request, Response } from 'express';

import { findAndDeleteEmployee, findAndUpdateEmployee, getEmployee, getEmployees, insertEmployee } from '../data-access';
import { Employee } from '../models/employee';

export const renderIndex = (request: Request, response: Response) => {
    getEmployees().then(employees => {
        response.render('employees/index', { pageTitle: 'Employees View', empList: employees, message: '' });
    }).catch(message => {
        response.render('employees/index', { pageTitle: 'Employees View', empList: [], message });
    });
}

export const renderEmployeeDetails = (request: Request, response: Response) => {
    const id = parseInt(request.params.empid);

    getEmployee(id).then(employee => {
        response.render('employees/details', { pageTitle: 'Employee Details View', employee, message: '' });
    }).catch(message => {
        response.render('employees/details', { pageTitle: 'Employee Details View', employee: {}, message });
    });
}

export const renderCreateEmployee = (request: Request, response: Response) => {
    response.render('employees/create', { pageTitle: 'Create Employee View', employee: {}, message: '' });
}

export const createEmployee = (request: Request, response: Response) => {
    const { eid, ename } = request.body;
    const employee = new Employee(parseInt(eid), ename);

    insertEmployee(employee).then(() => {
        response.redirect('/employees');
    }).catch(message => {
        response.render('employees/create', { pageTitle: 'Create Employee View', employee, message });
    });
}

export const renderEditEmployee = (request: Request, response: Response) => {
    const id = parseInt(request.params.empid);

    getEmployee(id).then(employee => {
        response.render('employees/edit', { pageTitle: 'Employee Edit View', employee, message: '' });
    }).catch(message => {
        response.render('employees/edit', { pageTitle: 'Employee Edit View', employee: {}, message });
    });
}

export const updateEmployee = (request: Request, response: Response) => {
    const id = parseInt(request.params.empid);

    const { eid, ename } = request.body;
    const employee = new Employee(parseInt(eid), ename);

    findAndUpdateEmployee(id, employee).then(() => {
        response.redirect('/employees');
    }).catch(message => {
        response.render('employees/edit', { pageTitle: 'Employee Edit View', employee, message });
    });
}

export const renderDeleteEmployee = (request: Request, response: Response) => {
    const id = parseInt(request.params.empid);

    getEmployee(id).then(employee => {
        response.render('employees/delete', { pageTitle: 'Employee Delete View', employee, message: '' });
    }).catch(message => {
        response.render('employees/delete', { pageTitle: 'Employee Delete View', employee: {}, message });
    });
}

export const deleteEmployee = (request: Request, response: Response) => {
    const id = parseInt(request.params.empid);

    findAndDeleteEmployee(id).then(() => {
        response.redirect('/employees');
    }).catch(message => {
        response.render('employees/delete', { pageTitle: 'Employee Delete View', employee: {}, message });
    });
}