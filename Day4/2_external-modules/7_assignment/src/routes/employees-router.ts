import express from 'express';

import * as employeesController from '../controllers/employees-controller';

const router = express.Router();

router.get('/', employeesController.index);

export default router;