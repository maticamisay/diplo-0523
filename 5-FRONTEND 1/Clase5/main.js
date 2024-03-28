const getProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
};

const saveCartLocalStorage = (item) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingProductIndex = cart.findIndex(
    (product) => product.id === item.id
  );
  if (existingProductIndex !== -1) {
    cart[existingProductIndex].quantity =
      (cart[existingProductIndex].quantity || 1) + 1;
  } else {
    item.quantity = 1;
    cart.push(item);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
};

const printProducts = async () => {
  const products = await getProducts();
  const productsContainer = document.querySelector("#products");

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.title}" />
        <h2>${product.title}</h2>
        <h3>$ ${product.price}</h3>
        <p>ID ${product.id}</p>
        `;
    const button = document.createElement("button");
    button.textContent = "Agregar al carrito";
    button.addEventListener("click", () => {
      saveCartLocalStorage(product);
    });
    productDiv.appendChild(button);
    productsContainer.appendChild(productDiv);
  });
};

const updateCartCount = () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let totalQuantity = cart.reduce((total, product) => {
    return total + product.quantity;
  }, 0);
  document.querySelector("#cart_count").textContent = ` ${totalQuantity}`;
};

printProducts();
updateCartCount();
