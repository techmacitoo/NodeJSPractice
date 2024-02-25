import fs from 'fs';
import path from 'path';
import { Employee } from "src/models/employee";

const filePath = path.join(process.cwd(), 'data', 'employees.json');

export const readData = (): Promise<Employee[]> => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                reject(`Error reading file from disk: ${err.message}`);
            } else {
                try {
                    const employees: Employee[] = JSON.parse(data);
                    resolve(employees);
                } catch (err) {
                    reject(`Error parsing JSON data: ${err}`);
                }
            }
        });
    });
}

export const writeData = (data: Employee[]): Promise<Employee[]> => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, JSON.stringify(data), 'utf-8', (err) => {
            if (err) {
                reject(`Error writing file to disk: ${err.message}`);
            } else {
                readData().then(resolve).catch(reject);
            }
        });
    });
}