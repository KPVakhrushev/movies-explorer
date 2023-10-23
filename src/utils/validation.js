import  Joi from 'joi';
//const Joi = require('joi');

const username = Joi.string().required().min(2).max(30).pattern(new RegExp ('^[ a-zA-Z0-9а-яА-Я-]+$'));
const email = Joi.string().email({ minDomainSegments: 2, tlds: { allow:false } }).required();
const password = Joi.string().min(2).max(30).required();

export const schemaRegistration = Joi.object({name:username, email, password})
export const schemaLogin = Joi.object({email, password})
export const schemaProfile = Joi.object({name:username, email})
