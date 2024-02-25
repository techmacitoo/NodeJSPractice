"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = void 0;
const data_access_1 = require("../data-access");
const index = (request, response) => {
    response.render('employees/index', { pageTitle: 'Employees View', empList: (0, data_access_1.getAllEmployees)() });
};
exports.index = index;
//# sourceMappingURL=employees-controller.js.map