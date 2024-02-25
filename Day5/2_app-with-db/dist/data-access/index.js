"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAndDeleteEmployee = exports.findAndUpdateEmployee = exports.insertEmployee = exports.getEmployee = exports.getEmployees = void 0;
const tslib_1 = require("tslib");
const employee_1 = require("../models/employee");
const file_handler_1 = require("../utilities/file-handler");
let employees = [];
(function initializeEmployees() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield (0, file_handler_1.readData)();
            employees = data.map((emp) => new employee_1.Employee(emp.id, emp.name));
        }
        catch (err) {
            console.log(err);
            employees = [];
        }
    });
})();
const getEmployees = () => {
    return new Promise((resolve, reject) => {
        if (employees.length > 0) {
            resolve(employees);
        }
        else {
            reject(new Error('No employees found'));
        }
    });
};
exports.getEmployees = getEmployees;
const getEmployee = (id) => {
    return new Promise((resolve, reject) => {
        const employee = employees.find((emp) => emp.id === id);
        if (employee) {
            resolve(employee);
        }
        else {
            reject(new Error('Employee Not found'));
        }
    });
};
exports.getEmployee = getEmployee;
const insertEmployee = (employeeToInsert) => {
    return new Promise((resolve, reject) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        employees.push(employeeToInsert);
        try {
            const data = yield (0, file_handler_1.writeData)(employees);
            employees = data.map((emp) => new employee_1.Employee(emp.id, emp.name));
            resolve(employees.find((emp) => emp.id === employeeToInsert.id));
        }
        catch (err) {
            reject(err);
        }
    }));
};
exports.insertEmployee = insertEmployee;
const findAndUpdateEmployee = (id, employeeToUpdate) => {
    return new Promise((resolve, reject) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const index = employees.findIndex(e => e.id === id);
        if (index !== -1) {
            employees[index] = Object.assign(Object.assign({}, employees[index]), employeeToUpdate);
            try {
                const data = yield (0, file_handler_1.writeData)(employees);
                employees = data.map((emp) => new employee_1.Employee(emp.id, emp.name));
                resolve(employees.find((emp) => emp.id === id));
            }
            catch (err) {
                reject(err);
            }
        }
        else {
            reject(new Error('Employee not found'));
        }
    }));
};
exports.findAndUpdateEmployee = findAndUpdateEmployee;
const findAndDeleteEmployee = (id) => {
    return new Promise((resolve, reject) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        employees = employees.filter(e => e.id !== id);
        try {
            yield (0, file_handler_1.writeData)(employees);
            resolve('Success, Deleting Employee...');
        }
        catch (err) {
            reject(err);
        }
    }));
};
exports.findAndDeleteEmployee = findAndDeleteEmployee;
//# sourceMappingURL=index.js.map