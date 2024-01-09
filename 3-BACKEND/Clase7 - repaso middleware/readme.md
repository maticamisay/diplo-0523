# Ejercicio de Middleware en Express.js

En este ejercicio, practicaremos la creación y el uso de middlewares en una aplicación web básica utilizando Express.js. El objetivo es crear una aplicación que permita a los usuarios registrarse proporcionando un nombre de usuario y una contraseña, y utilizar middlewares para validar los datos de entrada antes de procesar la solicitud.

## Instrucciones

Siga estos pasos para completar el ejercicio:

1. Inicialice un proyecto de Node.js y Express ejecutando `npm init` y `npm install express` en su directorio de trabajo.

2. Cree un archivo `app.js` para configurar y definir la aplicación Express.

3. Importe el módulo Express y configure la aplicación para escuchar en el puerto 3000.

4. Utilice `app.use(express.json())` para habilitar el análisis de JSON en las solicitudes entrantes.

5. Defina dos middlewares llamados `validarNombreUsuario` y `validarContraseña` antes de la definición de la ruta de registro de usuarios. Cada middleware debe realizar las siguientes validaciones respectivamente:

   - `validarNombreUsuario` debe verificar si el campo `username` existe y no está vacío en el cuerpo de la solicitud (`req.body`). Si no cumple con esta condición, debe responder con un código de estado 400 y un mensaje de error.

   - `validarContraseña` debe verificar si el campo `password` existe y tiene al menos 6 caracteres de longitud en el cuerpo de la solicitud (`req.body`). Si no cumple con esta condición, debe responder con un código de estado 400 y un mensaje de error.

6. Defina un endpoint `POST` en la ruta `/registro` que utilice los dos middlewares (`validarNombreUsuario` y `validarContraseña`) antes de procesar la solicitud. Cuando se cumplan las validaciones, responda con un mensaje de éxito que incluya el nombre de usuario registrado.

7. En un ejercicio más avanzado, podrías considerar guardar los datos del usuario en una base de datos, pero para este ejercicio, simplemente envía un mensaje de éxito.

8. Ejecute la aplicación utilizando `app.listen` en el puerto 3000.

9. Utilice herramientas como Postman o realice solicitudes HTTP desde un navegador para probar el registro de usuarios, asegurándose de que los middlewares funcionen correctamente.

10. Siéntase libre de experimentar modificando los middlewares o agregando nuevas validaciones según sea necesario.

¡Buena suerte con el ejercicio! El objetivo principal es comprender cómo funcionan los middlewares en Express.js y cómo pueden usarse para validar y procesar datos de entrada en una aplicación web.
