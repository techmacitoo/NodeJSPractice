import express from 'express';

import * as employeesController from '../controllers/employees-controller';

const router = express.Router();

// List all employees
router.get('/', employeesController.getEmployees);

// Get a single employee by ID
router.get('/:empid', employeesController.getEmployeeDetails);

// Create a new employee
router.post('/', employeesController.createEmployee);

// Update an employee by ID
router.put('/:empid', employeesController.updateEmployee);

// Delete an employee by ID
router.delete('/:empid', employeesController.deleteEmployee);

export default router;