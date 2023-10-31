Las funciones declaradas y las funciones expresadas son dos formas de definir funciones en JavaScript, y existen algunas diferencias clave entre ellas:

1. **Sintaxis**:

   - **Función Declarada**:
     ```javascript
     function nombreDeLaFuncion(parametros) {
       // Código de la función
     }
     ```
   - **Función Expresada**:
     ```javascript
     const nombreDeLaVariable = function (parametros) {
       // Código de la función
     };
     ```

2. **Hoisting**:

   - **Función Declarada**: Las funciones declaradas son izadas (hoisted) en su totalidad, lo que significa que pueden ser llamadas antes de su declaración en el código.
   - **Función Expresada**: Las funciones expresadas no son izadas en su totalidad. Solo la declaración de la variable es izada, pero no su asignación, por lo que no se pueden llamar antes de su declaración.

3. **Ámbito**:

   - **Función Declarada**: Dependiendo del contexto, las funciones declaradas pueden ser accedidas de manera global o dentro del ámbito en el que fueron definidas.
   - **Función Expresada**: El ámbito de las funciones expresadas es determinado por la variable a la que están asignadas.

4. **Anonimato**:
   - **Función Declarada**: Las funciones declaradas deben tener un nombre.
   - **Función Expresada**: Las funciones expresadas pueden ser anónimas o tener un nombre.

En resumen, aunque ambas son formas de definir funciones en JavaScript, las diferencias clave entre funciones declaradas y funciones expresadas radican en su sintaxis, comportamiento de hoisting, ámbito y posibilidad de anonimato.
