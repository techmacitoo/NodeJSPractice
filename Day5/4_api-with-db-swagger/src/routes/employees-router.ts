// import express from 'express';

// import * as employeesController from '../controllers/employees-controller';

// const router = express.Router();

// /**
//  * @swagger
//  * tags:
//  *   name: Employees
//  *   description: API endpoints for employee management
//  */

// /**
//  * @swagger
//  * /employees:
//  *  get:
//  *   summary: List all employees
//  *   tags: [Employees]
//  *   responses:
//  *      '200':
//  *         description: Returns a list of employees
//  */
// router.get('/', employeesController.getEmployees);

// /**
//  * @swagger
//  * /employees/{empid}:
//  *  get:
//  *   summary: Get an employee by ID
//  *   tags: [Employees]
//  *   parameters:
//  *      - in: path
//  *        name: empid
//  *        required: true
//  *        description: ID of the employee to get         
//  *        schema:
//  *          type: integer
//  *   responses:
//  *      '200':
//  *         description: Returns a list of employees
//  *      '404':
//  *        description: Employee not found
//  */
// router.get('/:empid', employeesController.getEmployeeDetails);

// /**
//  * @swagger
//  * /employees:
//  *  post:
//  *   summary: Create a new employee
//  *   tags: [Employees]
//  *   requestBody:
//  *    required: true
//  *    content:
//  *      application/json:
//  *       schema:
//  *          type: object
//  *          properties:
//  *            eid:
//  *             type: integer
//  *            ename:
//  *             type: string
//  *   responses:
//  *      '201':
//  *         description: Employee created successfully
//  */
// router.post('/', employeesController.createEmployee);

// /**
//  * @swagger
//  * /employees/{empid}:
//  *   put:
//  *     summary: Update an employee by ID
//  *     tags: [Employees]
//  *     parameters:
//  *       - in: path
//  *         name: empid
//  *         required: true
//  *         description: ID of the employee
//  *         schema:
//  *           type: integer
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               eid:
//  *                 type: integer
//  *               ename:
//  *                 type: string
//  *     responses:
//  *       200:
//  *         description: Employee updated successfully
//  *       404:
//  *         description: Employee not found
//  */
// router.put('/:empid', employeesController.updateEmployee);

// /**
//  * @swagger
//  * /employees/{empid}:
//  *   delete:
//  *     summary: Delete an employee by ID
//  *     tags: [Employees]
//  *     parameters:
//  *       - in: path
//  *         name: empid
//  *         required: true
//  *         description: ID of the employee to delete
//  *         schema:
//  *           type: integer
//  *     responses:
//  *       200:
//  *         description: Employee deleted successfully
//  *       404:
//  *         description: Employee not found
//  */
// router.delete('/:empid', employeesController.deleteEmployee);

// export default router;

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