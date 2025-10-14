const db = require('../config/db');

const Proyecto = {
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM Proyecto');
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM Proyecto WHERE id_proyecto = ?', [id]);
    return rows[0];
  },

  create: async ({ nombre, descripcion, fecha_inicio, duracion_total, id_usuario }) => {
    const [result] = await db.query(
      'INSERT INTO Proyecto (nombre, descripcion, fecha_inicio, duracion_total, id_usuario) VALUES (?, ?, ?, ?, ?)',
      [nombre, descripcion, fecha_inicio, duracion_total, id_usuario]
    );
    return { id_proyecto: result.insertId, nombre };
  },

  update: async (id, data) => {
    const { nombre, descripcion, fecha_inicio, duracion_total } = data;
    await db.query(
      'UPDATE Proyecto SET nombre = ?, descripcion = ?, fecha_inicio = ?, duracion_total = ? WHERE id_proyecto = ?',
      [nombre, descripcion, fecha_inicio, duracion_total, id]
    );
  },

  delete: async (id) => {
    await db.query('DELETE FROM Proyecto WHERE id_proyecto = ?', [id]);
  }
};

module.exports = Proyecto;


