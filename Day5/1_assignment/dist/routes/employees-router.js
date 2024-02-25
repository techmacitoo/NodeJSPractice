"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const employeesController = tslib_1.__importStar(require("../controllers/employees-controller"));
const router = express_1.default.Router();
router.get('/', employeesController.renderIndex);
router.get('/details/:empid', employeesController.renderEmployeeDetails);
router.get('/create', employeesController.renderCreateEmployee);
router.post('/create', employeesController.createEmployee);
router.get('/edit/:empid', employeesController.renderEditEmployee);
router.post('/edit/:empid', employeesController.updateEmployee);
router.get('/delete/:empid', employeesController.renderDeleteEmployee);
router.post('/delete/:empid', employeesController.deleteEmployee);
exports.default = router;
//# sourceMappingURL=employees-router.js.map