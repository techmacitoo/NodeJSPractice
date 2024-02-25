"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserDetails = exports.getUSers = void 0;
const tslib_1 = require("tslib");
const data_access_1 = require("../data-access");
const user_1 = require("../models/user");
const schema_1 = require("../validation/schema");
const getUSers = (request, response) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, data_access_1.getUSers)();
        response.status(200).json({ users });
    }
    catch (error) {
        response.status(500).json({ message: 'Failed to get users', error });
    }
});
exports.getUSers = getUSers;
const getUserDetails = (request, response) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(request.params.userid);
        const user = yield (0, data_access_1.getUser)(id);
        if (user) {
            response.status(200).json({ user });
        }
        else {
            response.status(404).json({ message: "User not found" });
        }
    }
    catch (error) {
        response.status(500).json({ message: 'Failed to get user details', error });
    }
});
exports.getUserDetails = getUserDetails;
const createUser = (request, response) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const value = yield schema_1.createUserSchema.validateAsync(request.body);
        const user = new user_1.User(parseInt(value.userid), value.username);
        yield (0, data_access_1.insertUser)(user);
        response.status(201).json({ message: 'Employee created successfully', user });
    }
    catch (error) {
        const validationError = error;
        response.status(500).json({ message: 'Validation failed', details: validationError.details });
    }
});
exports.createUser = createUser;
const updateUser = (request, response) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(request.params.userid);
    try {
        const value = yield schema_1.updateUserSchema.validateAsync(request.body);
        const user = new user_1.User(value.userid, value.username);
        yield (0, data_access_1.findAndUpdateUser)(id, user);
        response.status(200).json({ message: 'User updated successfully', user });
    }
    catch (error) {
        const validationError = error;
        response.status(500).json({ message: 'Validation failed', details: validationError.details });
    }
});
exports.updateUser = updateUser;
const deleteUser = (request, response) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(request.params.userid);
        yield (0, data_access_1.findAndDeleteUser)(id);
        response.status(200).json({ message: 'User deleted successfully' });
    }
    catch (error) {
        response.status(500).json({ message: 'Failed to delete user', error });
    }
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=users-controller.js.map