const express = require("express");
const router = express.Router();
const { getUsers, createUser, updateUser } = require("../controllers/user");

const { createUserSchema, updateUserSchema, paramsSchema } = require('../validations/user');
const validator = require('../middlewares/validator');

router.get("/users", getUsers);
router.post("/users", validator.body(createUserSchema), createUser);
router.put("/users/:id", validator.params(paramsSchema), validator.body(updateUserSchema), updateUser);

module.exports = router;
