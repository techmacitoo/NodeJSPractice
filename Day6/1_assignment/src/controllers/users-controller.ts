import { Request, Response } from 'express';
import { findAndDeleteUser, findAndUpdateUser, getUSers as getAllUsers, getUser, insertUser } from '../data-access';
import { User } from '../models/user';
import { createUserSchema, updateUserSchema } from '../validation/schema';
import { ValidationError } from 'joi';

export const getUSers = async (request: Request, response: Response) => {
    try {
        const users = await getAllUsers();
        response.status(200).json({ users });
    } catch (error) {
        response.status(500).json({ message: 'Failed to get users', error });
    }
}

export const getUserDetails = async (request: Request, response: Response) => {
    try {
        const id = parseInt(request.params.userid);
        const user = await getUser(id);
        if (user) {
            response.status(200).json({ user });
        } else {
            response.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        response.status(500).json({ message: 'Failed to get user details', error });
    }
}


export const createUser = async (request: Request, response: Response): Promise<void> => {
    try {
        const value = await createUserSchema.validateAsync(request.body);
        const user = new User(parseInt(value.userid), value.username);
        await insertUser(user);
        response.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        const validationError = error as ValidationError;
        response.status(500).json({ message: 'Validation failed', details: validationError.details });
    }
}

export const updateUser = async (request: Request, response: Response): Promise<void> => {
    const id = parseInt(request.params.userid);

    try {
        const value = await updateUserSchema.validateAsync(request.body);
        const user = new User(value.userid, value.username);
        await findAndUpdateUser(id, user);
        response.status(200).json({ message: 'User updated successfully', user });
    } catch (error) {
        const validationError = error as ValidationError;
        response.status(500).json({ message: 'Validation failed', details: validationError.details });
    }
}

export const deleteUser = async (request: Request, response: Response): Promise<void> => {
    try {
        const id = parseInt(request.params.userid);
        await findAndDeleteUser(id);
        response.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        response.status(500).json({ message: 'Failed to delete user', error });
    }
}