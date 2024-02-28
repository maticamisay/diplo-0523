const formNode = document.querySelector("#productForm");
const productsContainerNode = document.querySelector("#productsContainer");

formNode.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(formNode);
  const data = Object.fromEntries(formData);
  printProduct(data);
  formNode.reset();
});

function printProduct(product) {
  const containerProduct = document.createElement("article");
  const nameProduct = document.createElement("h3");
  const deleteButton = document.createElement("button");
  const editButton = document.createElement("button");

  nameProduct.innerHTML = product.nombre;
  deleteButton.innerHTML = "Eliminar";
  editButton.innerHTML = "Editar";

  deleteButton.addEventListener("click", function () {
    productsContainerNode.removeChild(containerProduct);
  });

  editButton.addEventListener("click", function () {
    formNode.nombre.value = product.nombre;
    formNode.precio.value = product.precio;
    productsContainerNode.removeChild(containerProduct);
  });

  containerProduct.appendChild(nameProduct);
  containerProduct.appendChild(deleteButton);
  containerProduct.appendChild(editButton);
  productsContainerNode.appendChild(containerProduct);
}
