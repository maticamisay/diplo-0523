const getProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
};

const getCart = () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  return cart;
};

const removeProductFromCart = (productId) => {
  let cart = getCart();
  const productIndex = cart.findIndex((product) => product.id === productId);
  if (productIndex !== -1) {
    cart.splice(productIndex, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    printCart();
    updateCartCount();
  }
};

const printCart = async () => {
  const cart = getCart();
  const products = await getProducts();
  const cartContainer = document.querySelector("#cart-items");

  // Limpiar el contenedor del carrito antes de agregar los productos
  cartContainer.innerHTML = "";

  cart.forEach((cartItem) => {
    const product = products.find((product) => product.id === cartItem.id);
    if (product) {
      const productDiv = document.createElement("div");
      productDiv.classList.add("cart-item");
      productDiv.innerHTML = `
            <h2>${product.title}</h2>
            <p>ID: ${product.id}</p>
            <p>Cantidad: ${cartItem.quantity}</p>
            <p>Precio: $${product.price}</p>
            <p>Total: $${product.price * cartItem.quantity}</p>
            `;
      const button = document.createElement("button");
      button.textContent = "Eliminar del carrito";
      button.addEventListener("click", () => {
        removeProductFromCart(product.id);
      });
      productDiv.appendChild(button);
      cartContainer.appendChild(productDiv);
    }
  });
};

document.addEventListener("DOMContentLoaded", printCart);
