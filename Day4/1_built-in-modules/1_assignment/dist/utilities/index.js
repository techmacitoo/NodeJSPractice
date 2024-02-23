"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.smsClient = exports.emailClient = void 0;
const email_1 = require("./email");
const sms_1 = require("./sms");
exports.emailClient = new email_1.Email();
exports.smsClient = new sms_1.SMS();
//# sourceMappingURL=index.js.map