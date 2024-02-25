import { Employee } from "src/models/employee";
import * as fs from 'fs';
import * as path from 'path';

const employees: Array<Employee> = [
    { id: 1, name: "Manish" },
    { id: 2, name: "Abhijeet" },
    { id: 3, name: "Ram" },
    { id: 4, name: "Abhishek" },
    { id: 5, name: "Ramakant" }
];

export const getAllEmployees = (): Array<Employee> => {
    return employees;
}

// Read file Asynchronously
// fs.readFile(filePath, 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// Write file Asynchronously
let message = "Hello from Node Application\n";
const filePath = path.join(process.cwd(), 'files', 'file2.txt');

fs.writeFile(filePath, message, 'utf-8', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File written successfully");
    }
});


