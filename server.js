const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>Hola mundo desde Coolify</h1>
    <p>Despliegue exitoso en entorno local privado.</p>
  `);
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    message: "La app funciona correctamente"
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});