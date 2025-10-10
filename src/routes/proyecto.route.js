const express = require('express');
const router = express.Router();
const controller = require('../controllers/proyecto.controller');

router.get('/', controller.getProyectos);
router.get('/:id', controller.getProyectoById);
router.post('/', controller.createProyecto);
router.put('/:id', controller.updateProyecto);
router.delete('/:id', controller.deleteProyecto);

module.exports = router;
