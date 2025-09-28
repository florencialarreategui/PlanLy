require('dotenv').config(); // Carga variables desde .env
const app = require('./src/app'); // Importa configuración de Express

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(` Servidor corriendo en http://localhost:${PORT}`);
});

