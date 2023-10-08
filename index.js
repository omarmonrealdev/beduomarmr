require("dotenv").config();

const { initDatabase } = require("./db");
initDatabase();

const express = require("express");
const app = express();

app.use(express.json());

const articleRouter = require('./routers/post');
const userRouter = require('./routers/user');
const commentsRouter = require('./routers/comment');
const authRouter = require('./routers/auth');

const validationError = require('./middlewares/validation-error');
const unknownError = require('./middlewares/unknown-error');


//RUTAS
app.use(articleRouter);
app.use(userRouter);
app.use(commentsRouter);
app.use(authRouter);

//MANEJO DE ERRORES: nuestro codigo toma control de los errores (ya no express(respuestas html))
app.use(validationError);
app.use(unknownError);

app.listen(process.env.SERVER_PORT, function () {
  console.log("> Escuchando puerto " + process.env.SERVER_PORT);
});

