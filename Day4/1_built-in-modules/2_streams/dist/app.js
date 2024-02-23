"use strict";
// import * as fs from 'fs';
// import * as path from 'path';
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
// const filePath = path.join(process.cwd(), 'files', 'file1.txt');
// // // Read the entire file into memory and then callback will be executed
// // fs.readFile(filePath, 'utf-8', (err, data) => {
// //     if (err)
// //         console.error(err);
// //     else
// //         console.log(data.toString());
// // });
// // const readStream = fs.createReadStream(filePath, {
// //     highWaterMark: 1024 * 1024
// // });
// const readStream = fs.createReadStream(filePath, 'utf-8');
// readStream.on('open', () => {
//     console.log('File Opened....');
// });
// readStream.on('error', (err: NodeJS.ErrnoException) => {
//     console.log(err);
// });
// readStream.on('data', (chunk: string) => {
//     console.log(chunk);
// });
// readStream.on('end', () => {
//     console.log('File ended....');
// });
// // ------------------------------------------ File Copy
// import * as fs from 'fs';
// import * as path from 'path';
// const readFilePath = path.join(process.cwd(), 'files', 'file1.txt');
// const writeFilePath = path.join(process.cwd(), 'files', 'file2.txt');
// const readStream = fs.createReadStream(readFilePath, 'utf-8');
// const writeStream = fs.createWriteStream(writeFilePath, 'utf-8');
// readStream.on('data', (chunk: string) => {
//     writeStream.write(chunk);
// });
// readStream.on('end', () => {
//     console.log('File Copied....');
// });
// readStream.on('error', (err: NodeJS.ErrnoException) => {
//     console.error('Error reading file:', err);
// });
// writeStream.on('error', (err: NodeJS.ErrnoException) => {
//     console.error('Error writing file:', err);
// });
// // ------------------------------------------ File Copy using Pipes
// import * as fs from 'fs';
// import * as path from 'path';
// const readFilePath = path.join(process.cwd(), 'files', 'file1.txt');
// const writeFilePath = path.join(process.cwd(), 'files', 'file3.txt');
// const readStream = fs.createReadStream(readFilePath, 'utf-8');
// const writeStream = fs.createWriteStream(writeFilePath, 'utf-8');
// readStream.pipe(writeStream).on('finish', () => {
//     console.log('File Copied....');
// });
// ------------------------------------------ Pipes
const fs = tslib_1.__importStar(require("fs"));
const path = tslib_1.__importStar(require("path"));
const zlib = tslib_1.__importStar(require("zlib"));
const stats_1 = require("./stats");
const encrypt_1 = require("./encrypt");
const readFilePath = path.join(process.cwd(), 'files', 'file1.txt');
const writeFilePath = path.join(process.cwd(), 'files', 'file4.txt.gz');
const readStream = fs.createReadStream(readFilePath, 'utf-8');
const writeStream = fs.createWriteStream(writeFilePath, 'utf-8');
readStream
    .pipe(zlib.createGzip())
    .pipe(writeStream)
    .on('finish', () => {
    console.log('File Compressed....');
    (0, stats_1.compareFileSizes)(readFilePath, writeFilePath);
});
(0, encrypt_1.encryptFile)(readFilePath, writeFilePath);
//# sourceMappingURL=app.js.map