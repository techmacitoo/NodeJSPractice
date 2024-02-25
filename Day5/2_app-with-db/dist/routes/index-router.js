"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const homeController = tslib_1.__importStar(require("../controllers/home-controller"));
const router = express_1.default.Router();
router.get('/', homeController.index);
router.get('/contact', homeController.contact);
router.get('/about', homeController.about);
exports.default = router;
//# sourceMappingURL=index-router.js.map