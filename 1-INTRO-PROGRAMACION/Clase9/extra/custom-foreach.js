const arr = [1, 2, 3, 4, 5];

function miForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

miForEach(arr, function (elemento, indice, arregloCompleto) {
  console.log(
    `Elemento: ${elemento}, Índice: ${indice}, Arreglo: ${arregloCompleto}`
  );
});

console.log("------");

arr.forEach(function (elemento, indice, arregloCompleto) {
  console.log(
    `Elemento: ${elemento}, Índice: ${indice}, Arreglo: ${arregloCompleto}`
  );
});

console.log("------");

const mapResult = arr.map(function (elemento, indice, arregloCompleto) {
  return elemento * 2;
});
console.log(mapResult);
