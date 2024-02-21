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

navbar.appendChild(buttonLogin);

const titleH1 = document.querySelector("main h1");
titleH1.style.color = "white";
