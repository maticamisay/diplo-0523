# README: Uso de `readFileSync` y `writeFileSync` en JavaScript con Node.js

## Descripción

`readFileSync` y `writeFileSync` son dos funciones proporcionadas por el módulo `fs` de Node.js para leer y escribir archivos de manera sincrónica, es decir, el programa esperará hasta que se complete la operación antes de continuar con la ejecución del código siguiente.

## Uso de `readFileSync`

Para leer un archivo de manera sincrónica, primero debes importar el módulo `fs` y luego utilizar la función `readFileSync`. Aquí hay un ejemplo:

```javascript
const fs = require("fs");

try {
  const data = fs.readFileSync("archivo.txt", "utf8");
  console.log(data);
} catch (err) {
  console.error(err);
}
```

En este ejemplo, `readFileSync` leerá el contenido del archivo 'archivo.txt' y lo almacenará en la variable `data`. Si ocurre algún error durante la lectura, se capturará en el bloque `catch` y se imprimirá el error.

## Uso de `writeFileSync`

Para escribir en un archivo de manera sincrónica, también debes importar el módulo `fs` y luego utilizar la función `writeFileSync`. Aquí hay un ejemplo:

```javascript
const fs = require("fs");

const contenido = "Este es el contenido del archivo";

try {
  fs.writeFileSync("archivo.txt", contenido, "utf8");
  console.log("Archivo escrito con éxito");
} catch (err) {
  console.error(err);
}
```

En este ejemplo, `writeFileSync` escribirá el contenido de la variable `contenido` en el archivo 'archivo.txt'. Si ocurre algún error durante la escritura, se capturará en el bloque `catch` y se imprimirá el error.

## Notas Importantes

1. Cuando se utiliza `readFileSync` o `writeFileSync`, es importante manejar posibles errores con un bloque `try-catch` para evitar que el programa se detenga inesperadamente.
2. Al usar `writeFileSync`, si el archivo especificado no existe, se creará uno nuevo. Si el archivo existe, su contenido será reemplazado.
3. Recuerda que estas operaciones son sincrónicas y bloquearán la ejecución del programa hasta que se completen. Para operaciones de lectura y escritura de archivos que no bloqueen el hilo principal, considera usar `readFile` y `writeFile` que son sus contrapartes asíncronas.
