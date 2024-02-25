import swaggerJSDoc from "swagger-jsdoc";
import path from "path";

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
    apis: [path.resolve(__dirname, '../routes/employees-router.ts')], // Path to the API routes
};

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;