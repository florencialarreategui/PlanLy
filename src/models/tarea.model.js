const db = require('../config/db');

const Tarea = {
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM Tarea');
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM Tarea WHERE id_tarea = ?', [id]);
    return rows[0];
  },

  getByProyecto: async (id_proyecto) => {
    const [rows] = await db.query('SELECT * FROM Tarea WHERE id_proyecto = ?', [id_proyecto]);
    return rows;
  },

  create: async ({ id_proyecto, nombre, duracion_estimada }) => {
    const [result] = await db.query(
      'INSERT INTO Tarea (id_proyecto, nombre, duracion_estimada) VALUES (?, ?, ?)',
      [id_proyecto, nombre, duracion_estimada]
    );
    return { id_tarea: result.insertId, nombre };
  },

  update: async (id, data) => {
    const { nombre, duracion_estimada, es_critica, tiempo_inicio_temprano, tiempo_final_temprano, tiempo_inicio_tardio, tiempo_final_tardio, holgura } = data;
    await db.query(
      `UPDATE Tarea SET 
        nombre = ?, duracion_estimada = ?, es_critica = ?, 
        tiempo_inicio_temprano = ?, tiempo_final_temprano = ?, 
        tiempo_inicio_tardio = ?, tiempo_final_tardio = ?, holgura = ? 
      WHERE id_tarea = ?`,
      [nombre, duracion_estimada, es_critica, tiempo_inicio_temprano, tiempo_final_temprano, tiempo_inicio_tardio, tiempo_final_tardio, holgura, id]
    );
  },

  delete: async (id) => {
    await db.query('DELETE FROM Tarea WHERE id_tarea = ?', [id]);
  }
};

module.exports = Tarea;


