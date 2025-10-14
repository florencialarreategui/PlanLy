const Tarea = require('../models/tarea.model');

exports.getTareas = async (req, res) => {
  const tareas = await Tarea.getAll();
  res.json(tareas);
};

exports.getTareaById = async (req, res) => {
  const tarea = await Tarea.getById(req.params.id);
  if (!tarea) return res.status(404).json({ message: 'Tarea no encontrada' });
  res.json(tarea);
};

exports.getTareasByProyecto = async (req, res) => {
  const tareas = await Tarea.getByProyecto(req.params.id);
  res.json(tareas);
};

exports.createTarea = async (req, res) => {
  const tarea = await Tarea.create(req.body);
  res.status(201).json(tarea);
};

exports.updateTarea = async (req, res) => {
  await Tarea.update(req.params.id, req.body);
  res.json({ message: 'Tarea actualizada' });
};

exports.deleteTarea = async (req, res) => {
  await Tarea.delete(req.params.id);
  res.json({ message: 'Tarea eliminada' });
};






