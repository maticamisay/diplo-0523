const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hola Mundo!");
    res.end();
  }

  if (req.url === "/api/productos") {
    res.write(JSON.stringify([{ id: 1, nombre: "Producto 1" }]));
    res.end();
  }
});

server.listen(PORT);

console.log(`Escuchando en el puerto ${PORT}...`);
