const callbackFunction = () => {
  console.log("hola chicos");
};

const buttonNodo = document.querySelector("#button_click");
buttonNodo.addEventListener("click", callbackFunction);

window.addEventListener("keydown", (event) => {
  if (event.key === "g" && event.ctrlKey) {
    event.preventDefault();
    console.log("se apreto la g + control");
  }
  if (event.key === "g" && !event.ctrlKey) {
    console.log("se apreto la g solamente");
  }
});

const formNodo = document.querySelector("#form");
formNodo.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("envio de formulario");
});

const sectionNode = document.querySelector("#section");
sectionNode.addEventListener("click", () => {
  console.log("clickeaste el padre");
});

const articleOneNode = document.querySelector("#article-1");
articleOneNode.addEventListener("click", (event) => {
  console.log("clickeaste el articulo 1");
  event.stopPropagation();
});

const articleTwoNode = document.querySelector("#article-2");
articleTwoNode.addEventListener("click", (event) => {
  console.log("clickeaste el articulo 2");
});

/*
<article id="product_card">
     <img src="https://placehold.jp/150x150png" />
     <h3>Producto 1</h3>
     <p>Codigo: 32FE-395</p>
     <button id="product_button">verdetalles</button>
</article>
*/

const products = [
  {
    id: "32FE-395",
    nombre: "Disco ssd",
  },
  {
    id: "32FE-396",
    nombre: "Memoria ram",
  },
  {
    id: "32FE-397",
    nombre: "Disco duro",
  },
  {
    id: "32FE-398",
    nombre: "Procesador",
  },
];

const productsContainerNode = document.querySelector("#product_container");

products.forEach((product) => {
  const article = document.createElement("article");
  const image = document.createElement("img");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const button = document.createElement("button");

  article.setAttribute("id", "product_card");
  image.setAttribute("src", "https://placehold.jp/150x150png");
  h3.innerHTML = product.nombre;
  p.innerHTML = product.id;
  button.addEventListener("click", () => getProductName(product));
  button.innerHTML = "Ver detalles";
  article.appendChild(image);
  article.appendChild(h3);
  article.appendChild(p);
  article.appendChild(button);
  productsContainerNode.appendChild(article);
});

function getProductName(producto) {
  console.log(`Clickeaste el producto ID ${producto.id} - ${producto.nombre}`);
}
