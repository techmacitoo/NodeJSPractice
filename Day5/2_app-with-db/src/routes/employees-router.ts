import express from 'express';

import * as employeesController from '../controllers/employees-controller';

const router = express.Router();

router.get('/', employeesController.renderIndex);

router.get('/details/:empid', employeesController.renderEmployeeDetails);

router.get('/create', employeesController.renderCreateEmployee);

router.post('/create', employeesController.createEmployee);

router.get('/edit/:empid', employeesController.renderEditEmployee);

router.post('/edit/:empid', employeesController.updateEmployee);

router.get('/delete/:empid', employeesController.renderDeleteEmployee);

router.post('/delete/:empid', employeesController.deleteEmployee);

export default router;