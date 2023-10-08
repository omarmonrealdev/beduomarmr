const Joi = require("joi");

//INSTALACIONES PREVIAS PARA JOI
//npm install joi
//npm install express-joi-validation

//las validaciones incluyen las carpetas: validations, middlewares/ y routers

//tomamos como base los modelos/tablas para crear el schema de joi
//regex: patron a seguir para una cadena de texto

exports.createUserSchema = Joi.object({
  username: Joi.string()
    .min(5)
    .max(50)
    .pattern(/^(?=.{5,50}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/)
    .required(),
  email: Joi.string().max(100).email().required(),
  password: Joi.string().min(8).max(50).required(),
});

exports.updateUserSchema = Joi.object({
  username: Joi.string()
    .min(5)
    .max(100)
    .pattern(/^(?=.{5,50}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/)
    .optional(),
  email: Joi.string().max(100).email().optional(),
  password: Joi.string().min(8).max(50).optional(),
}).min(1);

exports.paramsSchema = Joi.object({
  id: Joi.number().required()
});

//usar la validacion en los ROUTERS

//Validacion para el login: como se evalua username y password (de user), no hay necesidad de crear otro archivo

exports.loginSchema = Joi.object({
  username: Joi.string()
    .min(5)
    .max(50)
    .required(),
  password: Joi.string().min(8).max(50).required(),
});

