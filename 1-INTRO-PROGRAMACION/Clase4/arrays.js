const nombres = ["agustin", "pablo", "maria"];
//              0: AGUSTIN  1: PABLO 2: MARIA
console.log(nombres[0]);
console.log(nombres[1]);
console.log(nombres[2]);
console.log(nombres[100]);

const autos = [
  { marca: "peugeot", modelo: "208", puertas: 5 }, // POSICION 0
  { marca: "peugeot", modelo: "308", stock: 100 }, // POSICION 1
];
console.log(autos[2]);

// ==========================================

const alumnos = ["agustin", "pablo", "maria"];
let newAlumn = "matias";

console.log(alumnos);

alumnos.push(newAlumn);

console.log(alumnos);

alumnos.pop();

console.log(alumnos);

alumnos.push(24);

const cadenaDeAlumnos = alumnos.join();
console.log(cadenaDeAlumnos);
console.log(cadenaDeAlumnos[7]);

// ==========================================

var newCarrito = ["disco", "cartucho", "tinta", "cartucho", "cartucho"];
//                    0        1          2        3            4
const indice = newCarrito.indexOf("cartucho");
console.log(indice);
console.log(newCarrito[indice]);

const ultimoIndice = newCarrito.lastIndexOf("cartucho");
console.log(ultimoIndice);

console.log(newCarrito.includes("pc"));
console.log(newCarrito.includes("tinta"));

// ==========================================

const newCarsArray = [
  { marca: "peugeot", modelo: "208", puertas: 5 }, // 0
  { marca: "peugeot", modelo: "308", stock: 100 }, // 1
  { marca: "toyota", modelo: "corolla", puertas: 4 }, // 2
  { marca: "ford", modelo: "focus", stock: 120 }, // 3
  { marca: "chevrolet", modelo: "onix", puertas: 5 }, // 4
];

const sizeArray = newCarsArray.length;
const peugeotCars = [];
console.log(sizeArray);

for (let i = 0; i < sizeArray; i++) {
  if (newCarsArray[i].marca.includes("peugeot")) {
    peugeotCars.push(newCarsArray[i]);
  }
}

console.log(peugeotCars);

// ==========================================

/*
slice
El método slice se utiliza para extraer una sección de un array y devolver un nuevo array, 
sin modificar el array original. Acepta dos argumentos: el índice de inicio y el índice final (no incluido). 
Si se omite el segundo argumento, slice extraerá elementos hasta el final del array.
*/
const frutas = ["manzana", "plátano", "cereza", "dátil", "higo"];
//                  0          1        2          3        4
const seleccionadas = frutas.slice(1, 3);

console.log(seleccionadas); // ['plátano', 'cereza']
console.log(frutas); // ['manzana', 'plátano', 'cereza', 'dátil', 'higo'] (no modificado)

/*
splice
El método splice cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos. 
Modifica el array original y devuelve un array con los elementos eliminados. 
Acepta varios argumentos: el índice de inicio, el número de elementos a eliminar y los elementos a agregar.
*/
const animales = ["perro", "gato", "elefante", "león", "tigre"];

// Eliminar elementos
const eliminados = animales.splice(1, 2);
console.log(eliminados); // ['gato', 'elefante']
console.log(animales); // ['perro', 'león', 'tigre']
// Agregar elementos
animales.splice(1, 0, "jirafa", "serpiente");
console.log(animales); // ['perro', 'jirafa', 'serpiente', 'león', 'tigre']
// Reemplazar elementos
animales.splice(1, 2, "caballo", "cebra");
console.log(animales); // ['perro', 'caballo', 'cebra', 'león', 'tigre']
