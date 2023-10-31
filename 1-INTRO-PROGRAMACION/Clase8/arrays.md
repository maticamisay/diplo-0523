# Métodos de Arrays en JavaScript

JavaScript proporciona varios métodos de arrays que facilitan la manipulación y transformación de datos. En este documento, vamos a explorar cuatro métodos de arrays comúnmente usados: `forEach`, `filter`, `map` y `reduce`.

## `forEach`

El método `forEach` ejecuta una función proporcionada una vez para cada elemento de un array, en orden.

```javascript
const numeros = [1, 2, 3, 4, 5];
numeros.forEach(function (numero) {
  console.log(numero);
});
```

## `filter`

El método `filter` crea un nuevo array con todos los elementos que pasan la prueba implementada por la función proporcionada.

```javascript
const numeros = [1, 2, 3, 4, 5];
const numerosPares = numeros.filter(function (numero) {
  return numero % 2 === 0;
});
console.log(numerosPares); // [2, 4]
```

## `map`

El método `map` crea un nuevo array con los resultados de llamar a una función proporcionada en cada elemento del array.

```javascript
const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map(function (numero) {
  return numero * numero;
});
console.log(cuadrados); // [1, 4, 9, 16, 25]
```

## `reduce`

El método `reduce` ejecuta una función reductora proporcionada en cada elemento del array, de izquierda a derecha, para reducir el array a un único valor.

```javascript
const numeros = [1, 2, 3, 4, 5];
const suma = numeros.reduce(function (acumulador, numero) {
  return acumulador + numero;
}, 0);
console.log(suma); // 15
```

## Extra

Leer sobre find, sort, for of, for in, etc.

## Conclusión

Estos métodos de arrays en JavaScript son herramientas poderosas que pueden ayudarte a escribir código más limpio y eficiente. `forEach` es útil para iterar sobre los elementos de un array, `filter` para filtrar elementos basándote en una condición, `map` para transformar elementos, y `reduce` para acumular valores. Comprender cómo usar estos métodos te permitirá aprovechar al máximo las capacidades de JavaScript.

## Recursos adicionales

- [Array.prototype.forEach()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [Array.prototype.filter()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Array.prototype.map()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.reduce()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
