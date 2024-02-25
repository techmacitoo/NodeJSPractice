import express from 'express';
import * as homeController from '../controllers/home-controller';

const router = express.Router();

router.get('/', homeController.index);

router.get('/contact', homeController.contact);

router.get('/about', homeController.about);

export default router;