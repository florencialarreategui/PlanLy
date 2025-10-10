const db = require('../config/db');

const Usuario = {
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM Usuario');
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM Usuario WHERE id_usuario = ?', [id]);
    return rows[0];
  },

  create: async ({ nombre, correo, contrasena_hash }) => {
    const [result] = await db.query(
      'INSERT INTO Usuario (nombre, correo, contrasena_hash) VALUES (?, ?, ?)',
      [nombre, correo, contrasena_hash]
    );
    return { id_usuario: result.insertId, nombre, correo };
  },

  update: async (id, { nombre, correo, contrasena_hash }) => {
    await db.query(
      'UPDATE Usuario SET nombre = ?, correo = ?, contrasena_hash = ? WHERE id_usuario = ?',
      [nombre, correo, contrasena_hash, id]
    );
  },

  delete: async (id) => {
    await db.query('DELETE FROM Usuario WHERE id_usuario = ?', [id]);
  }
};

module.exports = Usuario;
