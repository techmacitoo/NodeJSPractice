"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
// import path from 'path';
const http_1 = require("http");
const app = (0, express_1.default)();
app.set('view engine', 'pug');
const employees = [
    { id: 1, name: "Manish" },
    { id: 2, name: "Abhijeet" },
    { id: 3, name: "Ram" },
    { id: 4, name: "Abhishek" },
    { id: 5, name: "Ramakant" }
];
app.get('/', (request, response) => {
    response.render('index', { pageTitle: 'Index View' });
});
app.get('/contact', (request, response) => {
    response.render('contact', { pageTitle: 'Contact View' });
});
app.get('/about', (request, response) => {
    response.render('about', { pageTitle: 'About View' });
});
app.get('/employees', (request, response) => {
    response.render('employees/index', { pageTitle: 'Employees View', empList: employees });
});
// Hosting
const server = (0, http_1.createServer)(app);
server.listen(3000);
function onError(err) {
    console.error(err);
}
function onListening() {
    const address = server.address();
    const port = typeof address === 'string' ? address : address === null || address === void 0 ? void 0 : address.port;
    console.log(`Express Server started on port: ${port}`);
}
server.on('error', onError);
server.on('listening', onListening);
//# sourceMappingURL=app.js.map