const Proyecto = require('../models/proyecto.model');

exports.getProyectos = async (req, res) => {
  const proyectos = await Proyecto.getAll();
  res.json(proyectos);
};

exports.getProyectoById = async (req, res) => {
  const proyecto = await Proyecto.getById(req.params.id);
  if (!proyecto) return res.status(404).json({ message: 'Proyecto no encontrado' });
  res.json(proyecto);
};

exports.createProyecto = async (req, res) => {
  const proyecto = await Proyecto.create(req.body);
  res.status(201).json(proyecto);
};

exports.updateProyecto = async (req, res) => {
  await Proyecto.update(req.params.id, req.body);
  res.json({ message: 'Proyecto actualizado' });
};

exports.deleteProyecto = async (req, res) => {
  await Proyecto.delete(req.params.id);
  res.json({ message: 'Proyecto eliminado' });
};


