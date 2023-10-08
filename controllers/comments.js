const { findAll, findById, insert, deleteById, update } = require('../services/comment');


exports.getComments = async function (request, response) {
  const comment = await findAll();
  response.status(200).json(comment);
};

exports.getComment = async function (request, response) {
  const { id } = request.params;
  const comment = await findById(id);
  response.status(200).json(comment);
};

exports.createComment = async function (request, response) {
  const { postId, content } = request.body;
  const comment = await insert ({ content, postId, userId: request.user.id });
  response.status(201).json(comment);
};

exports.updateComment = async function (request, response) {
  const { content } = request.body;
  const { id } = request.params;

  await update (id, { content });
  response.status(204).end();
};

exports.deleteComment = async function (request, response) {
  const { id } = request.params;
  await deleteById(id);
  response.status(204).end();
};

