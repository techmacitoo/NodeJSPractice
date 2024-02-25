import express from 'express';

import * as usersController from '../controllers/users-controller';

const router = express.Router();

// List all users
router.get('/', usersController.getUSers);

// Get a single user by ID
router.get('/:userid', usersController.getUserDetails);

// Create a new user
router.post('/', usersController.createUser);

// Update an user by ID
router.put('/:userid', usersController.updateUser);

// Delete an user by ID
router.delete('/:userid', usersController.deleteUser);

export default router;