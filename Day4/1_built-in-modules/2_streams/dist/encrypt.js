"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptFile = void 0;
const tslib_1 = require("tslib");
const fs = tslib_1.__importStar(require("fs"));
const crypto = tslib_1.__importStar(require("crypto"));
function encryptFile(inputPath, outputPath) {
    const algorithm = 'aes-192-cbc';
    const key = crypto.randomBytes(32);
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    const input = fs.createReadStream(inputPath);
    const output = fs.createWriteStream(outputPath);
    input.pipe(cipher).pipe(output);
}
exports.encryptFile = encryptFile;
//# sourceMappingURL=encrypt.js.map