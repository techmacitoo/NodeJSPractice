"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeData = exports.readData = void 0;
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const path_1 = tslib_1.__importDefault(require("path"));
const filePath = path_1.default.join(process.cwd(), 'data', 'employees.json');
const readData = () => {
    return new Promise((resolve, reject) => {
        fs_1.default.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                reject(`Error reading file from disk: ${err.message}`);
            }
            else {
                try {
                    const employees = JSON.parse(data);
                    resolve(employees);
                }
                catch (err) {
                    reject(`Error parsing JSON data: ${err}`);
                }
            }
        });
    });
};
exports.readData = readData;
const writeData = (data) => {
    return new Promise((resolve, reject) => {
        fs_1.default.writeFile(filePath, JSON.stringify(data), 'utf-8', (err) => {
            if (err) {
                reject(`Error writing file to disk: ${err.message}`);
            }
            else {
                (0, exports.readData)().then(resolve).catch(reject);
            }
        });
    });
};
exports.writeData = writeData;
//# sourceMappingURL=file-handler.js.map