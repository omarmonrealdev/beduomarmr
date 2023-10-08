const { insert, findAll, update } = require("../services/user");

exports.createUser = async function (request, response) {
  const { username, email, password } = request.body;
  const user = await insert({ username, email, password });
  response.status(201).json(user);
}

exports.getUsers = async function (request, response) {
  const users = await findAll();
  response.status(200).json(users);
};

exports.updateUser = async function(request, response) {
  const { username, email, password } = request.body;
  const { id } = request.params;

  await update(id, {username, email, password});
  response.status(204).end();
}
