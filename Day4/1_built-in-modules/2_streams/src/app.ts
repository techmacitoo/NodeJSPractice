// import * as fs from 'fs';
// import * as path from 'path';

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

// // ------------------------------------------ Pipes

// import * as fs from 'fs';
// import * as path from 'path';
// import * as zlib from 'zlib';
// import { compareFileSizes } from './stats';

// const readFilePath = path.join(process.cwd(), 'files', 'file1.txt');
// const writeFilePath = path.join(process.cwd(), 'files', 'file1.txt.gz');

// const readStream = fs.createReadStream(readFilePath, 'utf-8');
// const writeStream = fs.createWriteStream(writeFilePath, 'utf-8');

// readStream
//     .pipe(zlib.createGzip())
//     .pipe(writeStream)
//     .on('finish', () => {
//         console.log('File Compressed....');
//         compareFileSizes(readFilePath, writeFilePath);
//     });

// ------------------------------------------- Encryption and Decryption
import { createCipheriv, createDecipheriv, randomBytes, scrypt as scryptCallback } from 'crypto';
import { createReadStream, createWriteStream, writeFileSync, readFileSync } from 'fs';
import path from 'path';
import { promisify } from 'util';

const scrypt = promisify(scryptCallback);

const password: string = 'this-is-super-secret-key';
const salt: Buffer = randomBytes(16);

async function encryptAndDecryptFile(): Promise<void> {
    try {
        const key: Buffer = await scrypt(password, salt, 24) as Buffer;
        const algorithm: string = 'aes-192-cbc';
        const iv: Buffer = randomBytes(16); // Generate a random IV
        const ivPath: string = path.join(process.cwd(), 'files', 'iv.txt');

        writeFileSync(ivPath, iv);

        // Encryption
        const cipher = createCipheriv(algorithm, key, iv);
        const inputFile = createReadStream(path.join(process.cwd(), 'files', 'file1.txt'));
        const outputFile = createWriteStream(path.join(process.cwd(), 'files', 'file1-en.txt'));

        inputFile.pipe(cipher).pipe(outputFile).on('finish', () => {
            console.log("File Encrypted...");

            // Decryption
            const ivForDecrypt: Buffer = readFileSync(ivPath);
            const decipher = createDecipheriv(algorithm, key, ivForDecrypt);
            const inputFile = createReadStream(path.join(process.cwd(), 'files', 'file1-en.txt'));
            const outputFile = createWriteStream(path.join(process.cwd(), 'files', 'file1-decrypted.txt'));

            inputFile.pipe(decipher).pipe(outputFile).on('finish', () => {
                console.log("File Decrypted...");
            });
        });

    } catch (error) {
        console.error("Encryption/Decryption failed:", error);
    }
}

encryptAndDecryptFile();