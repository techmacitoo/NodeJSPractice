"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAndDeleteUser = exports.findAndUpdateUser = exports.insertUser = exports.getUser = exports.getUSers = void 0;
const tslib_1 = require("tslib");
const user_1 = require("../models/user");
const data_source_1 = require("../config/data-source");
const user_2 = require("../entity/user");
const userRepository = data_source_1.AppDataSource.getRepository(user_2.UserEntity);
const getUSers = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const userEntities = yield userRepository.find();
    return userEntities.map((entity) => new user_1.User(entity.userId, entity.userName));
});
exports.getUSers = getUSers;
const getUser = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const employeeEntity = yield userRepository.findOneBy({ userId: id });
    if (employeeEntity) {
        return new user_1.User(employeeEntity.userId, employeeEntity.userName);
    }
    return null;
});
exports.getUser = getUser;
const insertUser = (userToInsert) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const userEntity = userRepository.create({
        userId: userToInsert.userId,
        userName: userToInsert.userName
    });
    yield userRepository.save(userEntity);
    return new user_1.User(userEntity.userId, userEntity.userName);
});
exports.insertUser = insertUser;
const findAndUpdateUser = (id, userToUpdate) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let userEntity = yield userRepository.findOneBy({ userId: id });
    if (userEntity) {
        userEntity = userRepository.merge(userEntity, userToUpdate);
        yield userRepository.save(userEntity);
        return new user_1.User(userEntity.userId, userEntity.userName);
    }
    return null;
});
exports.findAndUpdateUser = findAndUpdateUser;
const findAndDeleteUser = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let userEntity = yield userRepository.findOneBy({ userId: id });
    if (!userEntity) {
        throw new Error("User not found");
    }
    yield userRepository.delete({ userId: id });
});
exports.findAndDeleteUser = findAndDeleteUser;
//# sourceMappingURL=index.js.map