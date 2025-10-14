const express = require('express');
const router = express.Router();
const controller = require('../controllers/tarea.controller');

router.get('/', controller.getTareas);
router.get('/:id', controller.getTareaById);
router.get('/proyecto/:id', controller.getTareasByProyecto);
router.post('/', controller.createTarea);
router.put('/:id', controller.updateTarea);
router.delete('/:id', controller.deleteTarea);

module.exports = router;

