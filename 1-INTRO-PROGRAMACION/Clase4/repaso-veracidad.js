let nombre = "matias";
let edad = 24;
let contador = 5;
console.log(nombre === "matias" && edad == 21 && edad == 20);
console.log(nombre === "matias" || edad == 21 || edad == 20);
console.log((nombre === "matias" && edad == 21) || edad == 24);

edad++; // edad = edad + 1
console.log(edad);

contador--; // contador = contador - 1
--contador; // contador = contador - 1
console.log(contador);

contador += 5; // contador = contador + 5
console.log(contador);

contador /= 8; // contador = contador / 8
console.log(contador);
