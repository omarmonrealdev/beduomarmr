const Joi = require("joi");

exports.createCommentScema = Joi.object({
  content: Joi.string().min(5).max(1000).required(),
  postId: Joi.number().required()
});

exports.updateCommentSchema = Joi.object({
  content: Joi.string().min(5).max(1000).required(),
});