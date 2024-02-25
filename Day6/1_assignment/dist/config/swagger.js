"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const swagger_jsdoc_1 = tslib_1.__importDefault(require("swagger-jsdoc"));
const path_1 = tslib_1.__importDefault(require("path"));
const options = {
    definition: {
        openapi: "3.0.1",
        info: {
            title: 'Employee API',
            version: '1.0.0',
            description: 'API documentation for employee management',
        },
        schemes: ["http"],
        servers: [{ url: "http://localhost:3000/" }],
        basePath: '/',
    },
    apis: [path_1.default.resolve(__dirname, '../routes/employees-router.ts')], // Path to the API routes
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
exports.default = swaggerSpec;
//# sourceMappingURL=swagger.js.map