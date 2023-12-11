# Pasos para crear el servidor

## 1. Ejecutar

```npm
npm init -y
```

Nos va a generar el siguiente package.json (si genera contenido extra, borrarlo hasta dejarlo así)
Package.json

```json
{
  "name": "clase1",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {},
  "author": "",
  "license": "ISC"
}
```

## 2. Instalar dependencias necesarias

- Para instalar express (framework de javascript para crear servidores)

```npm
npm install express
```

- Para instalar nodemon (reinicia el servidor cuando hay un cambio)

```npm
npm install nodemon -D
```

## 3. Configuración de los scripts necesarios

Modificaremos el Package.json de esta manera, en la llave de 'scripts'

```json
{
  ... codigo previo sin modificar
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  },
  ... codigo previo sin modificar
}
```

## Documentación extra

- [Callbacks](https://developer.mozilla.org/es/docs/Glossary/Callback_function)

- [Asincronismo](https://developer.mozilla.org/es/docs/Learn/JavaScript/Asynchronous/Introducing)

-[Express.js](https://expressjs.com/)

- [HTTP VERBS](https://developer.mozilla.org/es/docs/Web/HTTP/Methods)
