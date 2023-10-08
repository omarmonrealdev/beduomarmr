const express = require('express');
const router = express.Router();
const { getComments, getComment, createComment, deleteComment, updateComment } = require("../controllers/comments");

const validator = require('../middlewares/validator');
const jwtValidator = require('../middlewares/jwt');

const { createCommentScema, updateCommentSchema } = require('../validations/comment');
const { paramsSchema } = require('../validations/user');

router.get("/comments", getComments);

router.get('/comments/:id', validator.params(paramsSchema), getComment);

router.post('/comments', jwtValidator, validator.body(createCommentScema), createComment);

router.put(
          '/comments/:id', 
          jwtValidator, 
          validator.params(paramsSchema), 
          validator.body(updateCommentSchema), 
          updateComment
          );

router.delete(
            '/comments/:id', 
            jwtValidator, 
            validator.params(paramsSchema),  
            deleteComment
            );

module.exports = router;