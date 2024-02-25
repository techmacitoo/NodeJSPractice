"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const path_1 = tslib_1.__importDefault(require("path"));
const serve_favicon_1 = tslib_1.__importDefault(require("serve-favicon"));
const morgan_1 = tslib_1.__importDefault(require("morgan"));
const index_router_1 = tslib_1.__importDefault(require("./routes/index-router"));
const employees_router_1 = tslib_1.__importDefault(require("./routes/employees-router"));
const app = (0, express_1.default)();
app.set('view engine', 'pug');
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(path_1.default.join(process.cwd(), 'public')));
app.use((0, serve_favicon_1.default)(path_1.default.join(process.cwd(), 'public', 'images', 'favicon.png')));
app.use('/', index_router_1.default);
app.use('/employees', employees_router_1.default);
app.use((error, request, response, next) => {
    response.locals.message = error.message;
    response.locals.error = request.app.get('env') === 'development' ? error : {};
    response.status(500);
    response.render('error', { pageTitle: 'Error View' });
});
exports.default = app;
//# sourceMappingURL=app.js.map