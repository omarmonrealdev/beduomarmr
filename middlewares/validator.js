const { createValidator } = require('express-joi-validation');

module.exports = createValidator({
  passError: true //para manejo de errores (no texto), toma el error y lo manda a express (por defecto regresa un html, lo cual sigue siendo chafa)
});

//llevar el validador a los routers

