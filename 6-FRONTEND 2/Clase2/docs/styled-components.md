# Estilos Condicionales en Componentes React con Styled Components

Crear componentes con estilos condicionales en React te permite cambiar el estilo de tus componentes basándote en sus props o en el estado de la aplicación. Con `styled-components`, puedes hacer esto de manera elegante y eficiente.

## Instalación de Styled Components

Primero, asegúrate de tener `styled-components` instalado en tu proyecto:

```
npm install styled-components
```

## Crear un Componente Estilizado con Estilos Condicionales

Puedes definir estilos condicionales directamente dentro de tus componentes estilizados utilizando funciones que accedan a las props de tu componente.

```jsx
import styled from "styled-components";

// Definir un componente estilizado con estilos condicionales
const Boton = styled.button`
  background-color: ${(props) => (props.primario ? "blue" : "gray")};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.primario ? "darkblue" : "darkgray")};
  }
`;
```

En este ejemplo, el componente `Boton` cambiará su `background-color` basado en la prop `primario`. Si `primario` es `true`, el botón será azul; de lo contrario, será gris.

## Uso de Componentes con Estilos Condicionales

Ahora puedes usar el componente `Boton` y pasarle la prop `primario` para controlar su apariencia:

```jsx
import React from "react";
import Boton from "./Boton"; // Asegúrate de importar el componente correctamente

function App() {
  return (
    <div>
      <Boton primario>Haz clic aquí</Boton>
      <Boton>Haz clic aquí</Boton>
    </div>
  );
}
```

## Estilos Basados en el Estado

También puedes cambiar los estilos de un componente basándote en el estado de tu componente o aplicación:

```jsx
import React, { useState } from "react";
import styled from "styled-components";

const BotonEstado = styled.button`
  background-color: ${(props) => (props.activado ? "green" : "red")};
  color: white;
  /* Resto de estilos */
`;

function MiComponente() {
  const [activado, setActivado] = useState(false);

  return (
    <div>
      <BotonEstado activado={activado} onClick={() => setActivado(!activado)}>
        {activado ? "Activado" : "Desactivado"}
      </BotonEstado>
    </div>
  );
}
```

En este ejemplo, el botón cambia de color dependiendo de si está "activado" o no, basándose en el estado del componente `MiComponente`.

## Conclusión

El uso de estilos condicionales con `styled-components` en React es una forma poderosa y flexible de cambiar la apariencia de tus componentes en función de sus props o estado. Experimenta con diferentes condiciones y estilos para crear interfaces de usuario dinámicas y reactivas.
