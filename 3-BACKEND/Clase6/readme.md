# README: Middleware en Express

Este README tiene como objetivo proporcionar una introducción y explicación de los middlewares en Express, un framework de Node.js ampliamente utilizado en el desarrollo web. Los middlewares son una parte esencial para construir aplicaciones web robustas y eficientes, tanto en el lado del servidor como en el lado del cliente.

## ¿Qué es Express.js?

Express.js es un framework de Node.js que simplifica el desarrollo de aplicaciones web. Permite crear servidores web de manera rápida y eficiente, lo que lo convierte en una opción popular para desarrolladores full stack. Uno de los conceptos clave de Express.js son los middlewares.

## ¿Qué son los Middlewares en Express?

En el contexto de Express.js, los middlewares son funciones que se ejecutan en el proceso de manejo de solicitudes y respuestas HTTP. Actúan como intermediarios entre el cliente y el servidor, realizando tareas específicas durante la solicitud y respuesta. Los middlewares se pueden utilizar para una variedad de propósitos, como el procesamiento de datos, la autenticación, la autorización y el registro de errores.

## Uso básico de Middlewares

Para utilizar un middleware en Express, primero debes importar Express y crear una instancia de la aplicación. Luego, puedes agregar middlewares utilizando la función `app.use()` o `app.METHOD()`, donde `METHOD` es un verbo HTTP como `GET`, `POST`, `PUT`, `DELETE`, etc.

```javascript
const express = require("express");
const app = express();

// Middleware de registro de solicitudes
app.use((req, res, next) => {
  console.log(`Solicitud recibida en: ${new Date()}`);
  next(); // Llama a la siguiente función middleware
});

// Middleware de autenticación (ejemplo)
app.use((req, res, next) => {
  if (req.isAuthenticated()) {
    return next(); // Usuario autenticado, continúa
  }
  res.status(401).send("No autorizado"); // Usuario no autenticado
});

// Ruta principal
app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

app.listen(3000, () => {
  console.log("Servidor Express en ejecución en el puerto 3000");
});
```

En el ejemplo anterior, hemos definido dos middlewares. El primero registra la hora de cada solicitud, y el segundo verifica si el usuario está autenticado antes de permitir el acceso a ciertas rutas.

## Orden de Ejecución de Middlewares

Los middlewares se ejecutan en el orden en que se agregan al código, por lo que es importante tener en cuenta el orden. El middleware que llama a `next()` pasa la solicitud al siguiente middleware en la cadena. Si un middleware no llama a `next()`, la cadena de middlewares se detiene y la respuesta se envía al cliente.

## Middleware de Terceros

Además de crear tus propios middlewares, Express.js ofrece una gran variedad de middlewares de terceros que puedes utilizar para funciones comunes, como manejar sesiones, autenticación, compresión, entre otros. Puedes instalarlos a través de npm y agregarlos a tu aplicación de Express.

```javascript
const express = require("express");
const app = express();
const helmet = require("helmet"); // Middleware de seguridad de terceros

app.use(helmet()); // Utilizando middleware de terceros

// ... otras configuraciones y rutas

app.listen(3000, () => {
  console.log("Servidor Express en ejecución en el puerto 3000");
});
```

## Conclusión

Los middlewares en Express son una parte fundamental para el desarrollo de aplicaciones web full stack. Te permiten realizar tareas de procesamiento, autenticación, autorización y mucho más de manera modular y eficiente. A medida que explores Express.js y su ecosistema, descubrirás que los middlewares son una herramienta poderosa para crear aplicaciones web robustas y seguras. ¡Diviértete programando en Express!
