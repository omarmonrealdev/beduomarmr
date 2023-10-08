//publicaciones

const express = require("express");
const router = express.Router();
const {
  getPosts,
  createPost,
  getPost,
  deletePost,
  updatePost,
} = require("../controllers/post");

const { createPostSchema, updatePostSchema } = require('../validations/post');
const { paramsSchema } = require('../validations/user'); //solo para importar el paramsSchema, es igual para todos
const validator = require('../middlewares/validator');

//traemos el middleware para proteger rutas (jwt)
const jwtValidator = require('../middlewares/jwt');

router.get("/posts", getPosts);
router.get("/posts/:id", validator.params(paramsSchema), getPost);
router.post("/posts", jwtValidator, validator.body(createPostSchema), createPost);
router.put("/posts/:id", jwtValidator, validator.params(paramsSchema), validator.body(updatePostSchema), updatePost);
router.delete("/posts/:id", jwtValidator, validator.params(paramsSchema), deletePost);

module.exports = router;
