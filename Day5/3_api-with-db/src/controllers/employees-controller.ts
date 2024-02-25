import { Request, Response } from 'express';
import { findAndDeleteEmployee, findAndUpdateEmployee, getEmployees as getAllEmployees, getEmployee, insertEmployee } from '../data-access';
import { Employee } from '../models/employee';
import { createEmployeeSchema, updateEmployeeSchema } from '../validation/schema';
import { ValidationError } from 'joi';

export const getEmployees = async (request: Request, response: Response) => {
    try {
        const employees = await getAllEmployees();
        response.status(200).json({ employees });
    } catch (error) {
        response.status(500).json({ message: 'Failed to get employees', error });
    }
}

export const getEmployeeDetails = async (request: Request, response: Response) => {
    try {
        const id = parseInt(request.params.empid);
        const employee = await getEmployee(id);
        if (employee) {
            response.status(200).json({ employee });
        } else {
            response.status(404).json({ message: "Employee not found" });
        }
    } catch (error) {
        response.status(500).json({ message: 'Failed to get employee details', error });
    }
}

// export const createEmployee = async (request: Request, response: Response): Promise<void> => {
//     try {
//         const value = request.body;
//         const employee = new Employee(parseInt(value.eid), value.ename);
//         await insertEmployee(employee);
//         response.status(201).json({ message: 'Employee created successfully', employee });
//     } catch (error) {
//         response.status(500).json({ message: 'Failed to create employee', error });
//     }
// }

// export const updateEmployee = async (request: Request, response: Response): Promise<void> => {
//     const id = parseInt(request.params.empid);

//     try {
//         const value = request.body;
//         const employee = new Employee(value.eid, value.ename);
//         await findAndUpdateEmployee(id, employee);
//         response.status(200).json({ message: 'Employee updated successfully', employee });
//     } catch (error) {
//         response.status(500).json({ message: 'Failed to update employee', error });
//     }
// }

export const createEmployee = async (request: Request, response: Response): Promise<void> => {
    try {
        const value = await createEmployeeSchema.validateAsync(request.body);
        const employee = new Employee(parseInt(value.eid), value.ename);
        await insertEmployee(employee);
        response.status(201).json({ message: 'Employee created successfully', employee });
    } catch (error) {
        const validationError = error as ValidationError;
        response.status(500).json({ message: 'Validation failed', details: validationError.details });
    }
}

export const updateEmployee = async (request: Request, response: Response): Promise<void> => {
    const id = parseInt(request.params.empid);

    try {
        const value = await updateEmployeeSchema.validateAsync(request.body);
        const employee = new Employee(value.eid, value.ename);
        await findAndUpdateEmployee(id, employee);
        response.status(200).json({ message: 'Employee updated successfully', employee });
    } catch (error) {
        const validationError = error as ValidationError;
        response.status(500).json({ message: 'Validation failed', details: validationError.details });
    }
}

export const deleteEmployee = async (request: Request, response: Response): Promise<void> => {
    try {
        const id = parseInt(request.params.empid);
        await findAndDeleteEmployee(id);
        response.status(200).json({ message: 'Employee deleted successfully' });
    } catch (error) {
        response.status(500).json({ message: 'Failed to delete employee', error });
    }
}