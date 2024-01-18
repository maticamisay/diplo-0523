function procesarPago() {
  fetch("http://localhost:3000/productos")
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.error(error.message))
    .finally(() => console.log("finalizado con exito"));
}

async function obtenerProductos() {
  const response = await fetch("http://localhost:3000/productos");
  const responseParsed = await response.json();
  console.log(responseParsed);
  console.log("finalizado con exito");
}

// procesarPago();
obtenerProductos();
