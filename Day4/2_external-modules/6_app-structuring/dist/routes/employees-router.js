"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const employeesController = tslib_1.__importStar(require("../controllers/employees-controller"));
const router = express_1.default.Router();
router.get('/', employeesController.index);
exports.default = router;
//# sourceMappingURL=employees-router.js.map