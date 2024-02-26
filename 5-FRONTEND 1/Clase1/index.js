const array = [1, 2, 3, 4, 5];

array.forEach((item) => {
  console.log(item);
});

const title = document.querySelector("h1");
title.innerHTML = "desde javascript jaja";
title.classList = "red";

const footer = document.querySelector(".footer_class");
const footerSecond = document.getElementsByClassName("footer_class");

console.log(footer);

const navbar = document.querySelector("#navbar");
navbar.innerHTML = "Navbar desde javascript";

const buttonLogin = document.createElement("button");
buttonLogin.innerHTML = "Iniciar sesión";
buttonLogin.style.backgroundColor = "black";
buttonLogin.style.color = "white";

const clickLogin = () => {
  window.location.replace("/login.html");
};
buttonLogin.addEventListener("click", clickLogin);

navbar.appendChild(buttonLogin);

const titleH1 = document.querySelector("main h1");
titleH1.style.color = "white";

const botonAzul = document.querySelector("#azul");
botonAzul.addEventListener("click", () => {
  const body = document.querySelector("body");
  body.style.backgroundColor = "blue";
});
const botonReset = document.querySelector("#reset");
botonReset.addEventListener("click", () => {
  const body = document.querySelector("body");
  body.style.backgroundColor = "white";
});

const productos = [
  {
    id: 1,
    nombre: "disco",
  },
  {
    id: 2,
    nombre: "celular",
  },
  {
    id: 3,
    nombre: "impresora",
  },
  {
    id: 4,
    nombre: "tinta",
  },
  {
    id: 5,
    nombre: "tablet",
  },
];

const mainNodo = document.querySelector("main");
productos.forEach((prod) => {
  const divProducto = document.createElement("div");
  const titleProducto = document.createElement("h3");
  const idProducto = document.createElement("span");

  titleProducto.innerHTML = prod.nombre;
  idProducto.innerHTML = `Id ${prod.id}`;
  divProducto.appendChild(titleProducto);
  divProducto.appendChild(idProducto);
  divProducto.style.border = "1px solid black";
  divProducto.style.marginBottom = "5px";

  mainNodo.appendChild(divProducto);
});
