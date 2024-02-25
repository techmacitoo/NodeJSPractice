"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserSchema = exports.createUserSchema = void 0;
const tslib_1 = require("tslib");
const joi_1 = tslib_1.__importDefault(require("joi"));
exports.createUserSchema = joi_1.default.object({
    userid: joi_1.default.number().required(),
    username: joi_1.default.string().min(2).required(),
}).required();
exports.updateUserSchema = joi_1.default.object({
    userid: joi_1.default.number().required(),
    username: joi_1.default.string().min(2)
}).min(1);
//# sourceMappingURL=schema.js.map