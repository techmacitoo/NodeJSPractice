"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const usersController = tslib_1.__importStar(require("../controllers/users-controller"));
const router = express_1.default.Router();
// List all users
router.get('/', usersController.getUSers);
// Get a single user by ID
router.get('/:userid', usersController.getUserDetails);
// Create a new user
router.post('/', usersController.createUser);
// Update an user by ID
router.put('/:userid', usersController.updateUser);
// Delete an user by ID
router.delete('/:userid', usersController.deleteUser);
exports.default = router;
//# sourceMappingURL=users-router.js.map