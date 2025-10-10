const Dependencia = require('../models/dependencia.model');

exports.getDependencias = async (req, res) => {
  const deps = await Dependencia.getAll();
  res.json(deps);
};

exports.getByTarea = async (req, res) => {
  const deps = await Dependencia.getByTarea(req.params.id);
  res.json(deps);
};

exports.createDependencia = async (req, res) => {
  const dep = await Dependencia.create(req.body);
  res.status(201).json(dep);
};

exports.deleteDependencia = async (req, res) => {
  await Dependencia.delete(req.params.id);
  res.json({ message: 'Dependencia eliminada' });
};


