El "hoisting" o "elevación" es un comportamiento en JavaScript en el que las declaraciones de variables y funciones son elevadas al inicio de su ámbito de ejecución antes de que el código sea ejecutado.

Para las **variables** declaradas con `var`, se eleva únicamente la declaración, y no la inicialización. Por ejemplo:

```javascript
console.log(a); // undefined
var a = 5;
console.log(a); // 5
```

En el ejemplo anterior, la declaración de la variable `a` es elevada al inicio de su ámbito de ejecución, por lo que no causa un error de referencia cuando intentamos hacer `console.log(a)` antes de su inicialización. Sin embargo, su valor en ese momento es `undefined` porque la inicialización `a = 5` aún no ha ocurrido.

Para las **funciones declaradas** con la palabra clave `function`, tanto la declaración como la definición son elevadas. Esto significa que podemos llamar a una función antes de su declaración en el código. Por ejemplo:

```javascript
saludar(); // "Hola"
function saludar() {
  console.log("Hola");
}
```

En este caso, la función `saludar` se puede llamar antes de su declaración porque tanto su declaración como su definición son elevadas al inicio de su ámbito de ejecución.

Es importante señalar que el "hoisting" no ocurre de la misma manera con las variables declaradas con `let` y `const`, ni con las funciones expresadas. En estos casos, si intentamos acceder a una variable o función antes de su declaración, obtendremos un error de referencia.
