import Joi from 'joi';

export const createEmployeeSchema = Joi.object({
    eid: Joi.number().required(),
    ename: Joi.string().min(2).required(),
}).required();

export const updateEmployeeSchema = Joi.object({
    eid: Joi.number().required(),
    ename: Joi.string().min(2)
}).min(1);