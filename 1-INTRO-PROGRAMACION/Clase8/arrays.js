const arrayNombres = [
  "Juan",
  "Pedro",
  "Pablo",
  "Luis",
  "Ana",
  "Fernando",
  "Agustin",
];

// FOR EACH
// arrayNombres.forEach((nombre, index) => {
//   if (index % 2 !== 0) {
//     console.log(index, nombre);
//   }
// });

console.log("-----");

// FOR
// for (let i = 0; i < arrayNombres.length; i++) {
//   console.log(arrayNombres[i]);
// }

console.log("-----");

// FILTER
// const arrayFiltrado = arrayNombres.filter((nombre) => {
//   console.log(nombre, nombre.length > 4 && nombre.length < 7);
//   return nombre.length > 4 && nombre.length < 7; // true o false
// });
// console.log(arrayFiltrado);

console.log("-----");

// MAP
// const arrayMapeado = arrayNombres.map((nombre) => {
//   return nombre.length; // 4, 5, 5, 4, 3, 8, 7
// });
// console.log(arrayMapeado);

// const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const arrayMapeado2 = arrayNumber.map((number) => {
//   return number * 2;
// });
// console.log(arrayMapeado2);

// const arrayMapeado3 = arrayNombres.map((nombre, index) => {
//   if (nombre.toLowerCase() === "juan") {
//     return "soy juan";
//   }
//   if (index === 3) {
//     return "posicion 3";
//   }
//   return nombre.toUpperCase();
// });
// console.log(arrayMapeado3);

console.log("-----");

// REDUCE
// El método `reduce` ejecuta una función reductora proporcionada en cada elemento del array, de izquierda a derecha, para reducir el array a un único valor.

const numeros = [1, 2, 3, 4, 5];
const suma = numeros.reduce(function (acumulador, numero) {
  console.log({
    acumulador: acumulador,
    numero: numero,
    resultado: acumulador + numero,
  });
  return acumulador + numero;
}, 0);
console.log(suma); // 15

// REDUCE ARRAY DE OBJETOS
const productos = [
  {
    nombre: "TV Samsung",
    precio: 1000,
    cantidad: 2,
  },
  {
    nombre: "Laptop Dell",
    precio: 1500,
    cantidad: 1,
  },
  {
    nombre: "Teclado",
    precio: 100,
    cantidad: 5,
  },
];
const sumaCarrito = productos.reduce((acumulador, producto) => {
  return acumulador + producto.precio * producto.cantidad;
}, 0);
console.log(sumaCarrito);

const sumaConFor = () => {
  let suma = 0;
  for (let i = 0; i < productos.length; i++) {
    suma += productos[i].precio * productos[i].cantidad;
  }
  return suma;
};
console.log(sumaConFor());
