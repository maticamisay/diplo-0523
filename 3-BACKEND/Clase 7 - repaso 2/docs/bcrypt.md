# Uso de Bcrypt en Node.js

## Introducción

Este documento proporciona una visión general del uso de Bcrypt en Node.js, explicando cómo funciona el hasheo de contraseñas y cómo se pueden comparar contraseñas hasheadas para la autenticación de usuarios.

## ¿Qué es Bcrypt?

Bcrypt es una biblioteca de encriptación utilizada para hashear contraseñas de manera segura. Fue diseñado para ser lento y costoso computacionalmente, lo cual es una ventaja para prevenir ataques de fuerza bruta. Bcrypt automáticamente incorpora un "salt" (una cadena de caracteres aleatoria) en el hash para prevenir ataques de diccionario y de tabla arcoiris.

## Hashing vs Encriptación

El hasheo es un proceso unidireccional que convierte datos (como una contraseña) en otra forma (el hash), que no puede ser fácilmente revertido. A diferencia de la encriptación, que es reversible, el hasheo es ideal para almacenar contraseñas de forma segura porque incluso si el hash es comprometido, la contraseña original permanece protegida.

## Funciones Principales en Bcrypt

### hashSync

La función `hashSync` de Bcrypt es utilizada para hashear una contraseña de manera sincrónica. Recibe la contraseña y el número de "rounds" de salting (usualmente entre 10 y 12).

Ejemplo de uso:

```javascript
const bcrypt = require("bcrypt");
const saltRounds = 10;
const myPassword = "password123";

const hashedPassword = bcrypt.hashSync(myPassword, saltRounds);
```

### compareSync

La función `compareSync` se utiliza para comparar una contraseña proporcionada por un usuario con un hash almacenado. Retorna `true` si coinciden o `false` si no.

Ejemplo de uso:

```javascript
const bcrypt = require('bcrypt');

const myPassword = 'password123';
const hashedPassword = // obtener el hash almacenado

const result = bcrypt.compareSync(myPassword, hashedPassword);
if (result) {
    console.log("¡Contraseña correcta!");
} else {
    console.log("Contraseña incorrecta.");
}
```

## Conclusión

El uso de Bcrypt en Node.js para hashear y comparar contraseñas es una práctica esencial para la seguridad de las aplicaciones. Almacenar contraseñas en forma de hash protege la información de los usuarios incluso en el caso de una violación de datos.
