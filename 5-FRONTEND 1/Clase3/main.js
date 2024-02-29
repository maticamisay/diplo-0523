const formNode = document.querySelector("#productForm");
const productsContainerNode = document.querySelector("#productsContainer");

function submitForm(event) {
  event.preventDefault();
  const formData = new FormData(formNode);
  const data = Object.fromEntries(formData);

  const result = validateForm(data);
  if (!result) return;

  printProduct(data);
  formNode.reset();
}

function validateForm(data) {
  const precio = Number(data.precio);
  if (!data.precio || !data.nombre) {
    alert("Todos los valores deben estar completos");
    formNode.reset();
    return false;
  }
  if (data.nombre.length < 5) {
    alert("El nombre debe tener mínimo 5 caracteres");
    formNode.reset();
    return false;
  }
  if (Number.isNaN(precio) || Number(data.precio) < 0) {
    alert("El precio debe ser mayor o igual a 0");
    formNode.reset();
    return false;
  }

  return true;
}

function printProduct(product) {
  const containerProduct = document.createElement("article");
  const nameProduct = document.createElement("h3");
  const priceProduct = document.createElement("p");
  const deleteButton = document.createElement("button");
  const editButton = document.createElement("button");

  nameProduct.innerHTML = product.nombre;
  priceProduct.innerHTML = product.precio;
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
  containerProduct.appendChild(priceProduct);
  containerProduct.appendChild(deleteButton);
  containerProduct.appendChild(editButton);
  productsContainerNode.appendChild(containerProduct);
}

formNode.addEventListener("submit", submitForm);
