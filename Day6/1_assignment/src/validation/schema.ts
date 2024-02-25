import Joi from 'joi';

export const createUserSchema = Joi.object({
    userid: Joi.number().required(),
    username: Joi.string().min(2).required(),
}).required();

export const updateUserSchema = Joi.object({
    userid: Joi.number().required(),
    username: Joi.string().min(2)
}).min(1);