const Usuario = require('../models/usuario.model');

exports.getUsuarios = async (req, res) => {
  const usuarios = await Usuario.getAll();
  res.json(usuarios);
};

exports.getUsuarioById = async (req, res) => {
  const usuario = await Usuario.getById(req.params.id);
  if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });
  res.json(usuario);
};

exports.createUsuario = async (req, res) => {
  const usuario = await Usuario.create(req.body);
  res.status(201).json(usuario);
};

exports.updateUsuario = async (req, res) => {
  await Usuario.update(req.params.id, req.body);
  res.json({ message: 'Usuario actualizado' });
};

exports.deleteUsuario = async (req, res) => {
  await Usuario.delete(req.params.id);
  res.json({ message: 'Usuario eliminado' });
};


