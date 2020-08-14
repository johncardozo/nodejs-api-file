const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("We're alive!!!");
});

// API que retorna un archivo del servidor
app.get("/api", function (req, res) {

  const file = `${__dirname}/files/documento.txt`;
  console.log(`It will download ${file}`)
  res.download(file); // Set disposition and send it.
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
