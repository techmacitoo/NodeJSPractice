"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareFileSizes = void 0;
const fs_1 = require("fs");
function getFileSize(filePath) {
    return new Promise((resolve, reject) => {
        (0, fs_1.stat)(filePath, (err, stats) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(stats.size);
        });
    });
}
function compareFileSizes(originalFilePath, compressedFilePath) {
    Promise.all([
        getFileSize(originalFilePath),
        getFileSize(compressedFilePath)
    ]).then(([originalSize, compressedSize]) => {
        console.log(`Original file size: ${originalSize} bytes`);
        console.log(`Compressed file size: ${compressedSize} bytes`);
        console.log(`Compression saved ${originalSize - compressedSize} bytes`);
    }).catch(err => console.error(err));
}
exports.compareFileSizes = compareFileSizes;
//# sourceMappingURL=stats.js.map