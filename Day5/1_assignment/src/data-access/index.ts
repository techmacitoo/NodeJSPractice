import { Employee } from "../models/employee";
import { readData, writeData } from "../utilities/file-handler";

let employees: Employee[] = [];

(async function initializeEmployees() {
    try {
        const data = await readData();
        employees = data.map((emp) => new Employee(emp.id, emp.name));
    } catch (err) {
        console.log(err);
        employees = [];
    }
})();

export const getEmployees = (): Promise<Employee[]> => {
    return new Promise((resolve, reject) => {
        if (employees.length > 0) {
            resolve(employees);
        } else {
            reject(new Error('No employees found'));
        }
    });
}

export const getEmployee = (id: number): Promise<Employee | undefined> => {
    return new Promise((resolve, reject) => {
        const employee = employees.find((emp) => emp.id === id);
        if (employee) {
            resolve(employee);
        } else {
            reject(new Error('Employee Not found'));
        }
    });
}

export const insertEmployee = (employeeToInsert: Employee): Promise<Employee> => {
    return new Promise(async (resolve, reject) => {
        employees.push(employeeToInsert);
        try {
            const data = await writeData(employees);
            employees = data.map((emp) => new Employee(emp.id, emp.name));
            resolve(employees.find((emp) => emp.id === employeeToInsert.id));
        } catch (err) {
            reject(err);
        }
    });
}

export const findAndUpdateEmployee = (id: number, employeeToUpdate: Partial<Employee>): Promise<Employee | undefined> => {
    return new Promise(async (resolve, reject) => {
        const index = employees.findIndex(e => e.id === id);
        if (index !== -1) {
            employees[index] = { ...employees[index], ...employeeToUpdate };
            try {
                const data = await writeData(employees);
                employees = data.map((emp) => new Employee(emp.id, emp.name));
                resolve(employees.find((emp) => emp.id === id));
            } catch (err) {
                reject(err);
            }
        } else {
            reject(new Error('Employee not found'));
        }
    });
}

export const findAndDeleteEmployee = (id: number): Promise<string> => {
    return new Promise(async (resolve, reject) => {
        employees = employees.filter(e => e.id !== id);
        try {
            await writeData(employees);
            resolve('Success, Deleting Employee...');
        } catch (err) {
            reject(err);
        }
    });
}