const User = require("../models/user");

exports.insert = function(data) {
  return User.create(data);
}

exports.findAll = function() {
  return User.findAll();
}

exports.finbByUsername = function(username) {   //CONSULTA PARA CONTROLADOR AUTH
  //SELECT * FROM users WHERE username = username;
  return User.findOne({
    where: {
      username,
    }
  });
};

exports.findById = function (id) {
  //SELECT * FROM users WHERE id = id (parametro)
  return User.findByPk(id);
};

exports.update = async function(id, data) {
  await User.update(data, {
    where: {
      id,
    },
  });
};