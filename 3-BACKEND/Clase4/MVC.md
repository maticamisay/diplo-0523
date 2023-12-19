# README: MVC en Express.js con Funciones

## Introducción

Este documento ofrece una guía para implementar el patrón Modelo-Vista-Controlador (MVC) en una aplicación usando Express.js, un framework para Node.js, utilizando funciones en lugar de clases. El patrón MVC ayuda a separar la lógica de la aplicación en tres componentes interconectados: Modelo, Vista y Controlador, lo que facilita la organización y el mantenimiento del código.

## ¿Qué es MVC?

**Modelo:** Representa la estructura de datos y la lógica de negocio. Gestiona el acceso y la manipulación de los datos.

**Vista:** Es la representación visual de los datos, usualmente realizada a través de plantillas HTML.

**Controlador:** Actúa como intermediario entre el Modelo y la Vista, gestionando las solicitudes del usuario y determinando qué respuesta debe generarse.

## Estructura de Carpetas

Una estructura típica para una aplicación MVC en Express:

```
mi-aplicacion-express/
|-- node_modules/
|-- public/
|   |-- css/
|   |-- js/
|   |-- images/
|-- src/
|   |-- controllers/
|   |-- models/
|   |-- routes/
|   |-- views/
|-- app.js
|-- package.json
```

## Configuración de Express

### Instalación

Instala Express y dependencias necesarias con NPM:

```bash
npm init -y
npm install express
```

### app.js

```javascript
const express = require("express");
const app = express();
const port = 3000;

// Configuración de rutas
app.use("/ruta", require("./src/routes/ruta"));

app.listen(port, () => {
  console.log(`Aplicación escuchando en http://localhost:${port}`);
});
```

## Implementación de MVC con Funciones

### Modelo

En `src/models/`, los modelos se definen como funciones que retornan objetos o realizan operaciones:

```javascript
// src/models/user.js
function createUser(name, age) {
  return {
    name,
    age,
  };
  // Aquí se pueden añadir más funciones para interactuar con la base de datos
}

module.exports = { createUser };
```

### Vista

Las vistas se encuentran en `src/views/` y pueden ser plantillas HTML:

```html
<!-- src/views/user.ejs -->
<html>
  <head>
    <title>User Profile</title>
  </head>
  <body>
    <h1>User: <%= user.name %></h1>
  </body>
</html>
```

### Controlador

En `src/controllers/`, se definen funciones para manejar las solicitudes:

```javascript
// src/controllers/userController.js
const userModel = require("../models/user");

function getUser(req, res) {
  let user = userModel.createUser("Alice", 25);
  res.render("user", { user: user });
}

module.exports = { getUser };
```

### Rutas

En `src/routes/`, se configuran las rutas para conectar URLs con controladores:

```javascript
// src/routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/user", userController.getUser);

module.exports = router;
```

## Conclusión

Usar funciones para implementar el patrón MVC en Express.js permite una estructura clara y modular para tus aplicaciones web, facilitando su desarrollo y mantenimiento. Esta guía te orientará en la construcción de aplicaciones web estructuradas y organizadas con Express.js y MVC.
