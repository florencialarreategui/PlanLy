const express = require('express');
const app = express();

// Middleware para leer JSON
app.use(express.json());

// Middleware de prueba (temporal)
app.get('/', (req, res) => {
  res.send('¡Bienvenido a PlanLy API!');
});

// Importar rutas aquí más adelante
// const usuarioRoutes = require('./routes/usuarioRoutes');
// app.use('/api/usuarios', usuarioRoutes);

module.exports = app;
