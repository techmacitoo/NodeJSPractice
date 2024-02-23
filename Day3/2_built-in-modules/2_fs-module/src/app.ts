import * as fs from 'fs';
import * as path from 'path';

// const filePath = path.join(process.cwd(), 'files', 'file1.txt');

// // Read file Synchronously
// try {
//     const data = fs.readFileSync(filePath, 'utf-8');
//     console.log(data);
// } catch (err) {
//     console.log(err);
// }

// Read file Asynchronously
// fs.readFile(filePath, 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// // Write file Asynchronously
// let message = "Hello from Node Application\n";
// const filePath = path.join(process.cwd(), 'files', 'file2.txt');

// fs.writeFile(filePath, message, 'utf-8', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File written successfully");
//     }
// });

// Append file Asynchronously
let message = "Hello from Node Application\n";
const filePath = path.join(process.cwd(), 'files', 'file3.txt');

fs.appendFile(filePath, message, 'utf-8', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File appended successfully");
    }
});

console.log("Completed and Waiting....");