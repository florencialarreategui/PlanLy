const db = require('../config/db');

const Dependencia = {
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM Dependencia');
    return rows;
  },

  getByTarea: async (id_tarea) => {
    const [rows] = await db.query('SELECT * FROM Dependencia WHERE id_tarea = ?', [id_tarea]);
    return rows;
  },

  create: async ({ id_tarea, id_predecesora }) => {
    const [result] = await db.query(
      'INSERT INTO Dependencia (id_tarea, id_predecesora) VALUES (?, ?)',
      [id_tarea, id_predecesora]
    );
    return { id_dependencia: result.insertId, id_tarea, id_predecesora };
  },

  delete: async (id) => {
    await db.query('DELETE FROM Dependencia WHERE id_dependencia = ?', [id]);
  }
};

module.exports = Dependencia;


