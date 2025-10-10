const express = require('express');
const router = express.Router();
const controller = require('../controllers/dependencia.controller');

router.get('/', controller.getDependencias);
router.get('/tarea/:id', controller.getByTarea);
router.post('/', controller.createDependencia);
router.delete('/:id', controller.deleteDependencia);

module.exports = router;

