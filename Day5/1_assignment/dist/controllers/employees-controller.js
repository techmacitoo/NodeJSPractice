"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmployee = exports.renderDeleteEmployee = exports.updateEmployee = exports.renderEditEmployee = exports.createEmployee = exports.renderCreateEmployee = exports.renderEmployeeDetails = exports.renderIndex = void 0;
const data_access_1 = require("../data-access");
const employee_1 = require("../models/employee");
const renderIndex = (request, response) => {
    (0, data_access_1.getEmployees)().then(employees => {
        response.render('employees/index', { pageTitle: 'Employees View', empList: employees, message: '' });
    }).catch(message => {
        response.render('employees/index', { pageTitle: 'Employees View', empList: [], message });
    });
};
exports.renderIndex = renderIndex;
const renderEmployeeDetails = (request, response) => {
    const id = parseInt(request.params.empid);
    (0, data_access_1.getEmployee)(id).then(employee => {
        response.render('employees/details', { pageTitle: 'Employee Details View', employee, message: '' });
    }).catch(message => {
        response.render('employees/details', { pageTitle: 'Employee Details View', employee: {}, message });
    });
};
exports.renderEmployeeDetails = renderEmployeeDetails;
const renderCreateEmployee = (request, response) => {
    response.render('employees/create', { pageTitle: 'Create Employee View', employee: {}, message: '' });
};
exports.renderCreateEmployee = renderCreateEmployee;
const createEmployee = (request, response) => {
    const { eid, ename } = request.body;
    const employee = new employee_1.Employee(parseInt(eid), ename);
    (0, data_access_1.insertEmployee)(employee).then(() => {
        response.redirect('/employees');
    }).catch(message => {
        response.render('employees/create', { pageTitle: 'Create Employee View', employee, message });
    });
};
exports.createEmployee = createEmployee;
const renderEditEmployee = (request, response) => {
    const id = parseInt(request.params.empid);
    (0, data_access_1.getEmployee)(id).then(employee => {
        response.render('employees/edit', { pageTitle: 'Employee Edit View', employee, message: '' });
    }).catch(message => {
        response.render('employees/edit', { pageTitle: 'Employee Edit View', employee: {}, message });
    });
};
exports.renderEditEmployee = renderEditEmployee;
const updateEmployee = (request, response) => {
    const id = parseInt(request.params.empid);
    const { eid, ename } = request.body;
    const employee = new employee_1.Employee(parseInt(eid), ename);
    (0, data_access_1.findAndUpdateEmployee)(id, employee).then(() => {
        response.redirect('/employees');
    }).catch(message => {
        response.render('employees/edit', { pageTitle: 'Employee Edit View', employee, message });
    });
};
exports.updateEmployee = updateEmployee;
const renderDeleteEmployee = (request, response) => {
    const id = parseInt(request.params.empid);
    (0, data_access_1.getEmployee)(id).then(employee => {
        response.render('employees/delete', { pageTitle: 'Employee Delete View', employee, message: '' });
    }).catch(message => {
        response.render('employees/delete', { pageTitle: 'Employee Delete View', employee: {}, message });
    });
};
exports.renderDeleteEmployee = renderDeleteEmployee;
const deleteEmployee = (request, response) => {
    const id = parseInt(request.params.empid);
    (0, data_access_1.findAndDeleteEmployee)(id).then(() => {
        response.redirect('/employees');
    }).catch(message => {
        response.render('employees/delete', { pageTitle: 'Employee Delete View', employee: {}, message });
    });
};
exports.deleteEmployee = deleteEmployee;
//# sourceMappingURL=employees-controller.js.map