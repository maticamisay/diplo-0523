En programación, los términos "parámetro" y "argumento" se utilizan a menudo de forma intercambiable, pero técnicamente tienen significados diferentes.

### Parámetro

Un parámetro es una variable que se usa en la definición de una función. Es un nombre que se usa en la función para referirse a los valores que se pasarán a la función cuando se llame. Los parámetros son como variables locales que toman el valor de los argumentos cuando la función es invocada.

```javascript
function sumar(a, b) {
  return a + b;
}
```

En el ejemplo anterior, `a` y `b` son parámetros de la función `sumar`. Son nombres que se usan en la función para referirse a los valores que se pasan a la función cuando se llama.

### Argumento

Un argumento es un valor que se pasa a una función cuando se llama. Los argumentos son los valores reales que se usan para invocar la función.

```javascript
let resultado = sumar(3, 5);
```

En el ejemplo anterior, `3` y `5` son argumentos que se pasan a la función `sumar` cuando se llama.

### Conclusión

En resumen, los parámetros son nombres que se utilizan en la definición de una función para referirse a los valores que se pasarán a la función cuando se llame, mientras que los argumentos son los valores reales que se pasan a la función cuando se llama.
