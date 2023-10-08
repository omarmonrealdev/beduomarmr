const express = require('express');
const router = express.Router();
const { login } = require('../controllers/auth');
const validator = require('../middlewares/validator');
const { loginSchema } = require('../validations/user');

router.post("/login", validator.body(loginSchema), login);

module.exports = router;


/*autenticacion: 
npm install passport passport-jwt jsonwebtoken
crear el router (auth.js), 
llevar el router a index.js
crear el controlador (auth.js), llevar la funcion al router: aqui va el codigo principal de la autenticacion
crear el schema de validacion (en este caso esta en user.js), usarlo en el router
crear una consulta en el servicio (user.js) para buscar por username

passport: para el manejo del token, comenzamos en la carpeta de middlewares (jwt.js)
*/

