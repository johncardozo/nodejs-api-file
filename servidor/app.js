const express = require("express");
const app = express();
const port = process.env.port || 3000;

app.get("/", (req, res) => {
  res.send("API activa");
});

app.get("/api/analoga", function (req, res) {
  const file = `${__dirname}/files/analoga.csv`;
  res.download(file); // Retorna el archivo
});

app.get("/api/digital", function (req, res) {
  const file = `${__dirname}/files/digital.csv`;
  res.download(file); // Retorna el archivo
});

app.listen(port, () =>
  console.log(`Aplicación funcionando por el puerto ${port}!`)
);
