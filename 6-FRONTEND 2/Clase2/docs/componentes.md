# Creación de Componentes en React

React permite desarrollar aplicaciones de manera eficiente mediante el uso de componentes, los cuales son bloques de construcción reutilizables que dividen la UI en partes independientes y reutilizables.

## Crear un Componente

Los componentes en React pueden ser de clase o funcionales. Con la introducción de Hooks, los componentes funcionales son más comunes y recomendados.

### Componente Funcional

```jsx
import React from "react";

function Saludo(props) {
  return <h1>Hola, {props.nombre}!</h1>;
}
```

### Componente de Clase

```jsx
import React, { Component } from "react";

class Saludo extends Component {
  render() {
    return <h1>Hola, {this.props.nombre}!</h1>;
  }
}
```

## Pasar Props

Los props son argumentos que pasas a los componentes. Son inmutables dentro del componente y se utilizan para pasar datos y métodos de un componente padre a un componente hijo.

```jsx
// En un componente padre
<Saludo nombre="Mundo" />
```

## Incorporar Styled Components

`styled-components` es una librería que permite utilizar estilos a nivel de componente utilizando literales de plantilla etiquetados en JavaScript. Esto significa que puedes escribir CSS real para estilizar tus componentes, manteniendo los estilos encapsulados y fuera del ámbito global.

### Instalación

Primero, necesitas instalar `styled-components`:

```
npm install styled-components
```

### Uso de Styled Components

```jsx
import styled from "styled-components";

// Crear un componente estilizado
const BotonEstilizado = styled.button`
  background-color: blue;
  color: white;
  font-size: 20px;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;

function App() {
  return <BotonEstilizado>Haz clic aquí</BotonEstilizado>;
}
```

En este ejemplo, `BotonEstilizado` es un componente que puedes usar igual que cualquier otro componente de React, pero tiene estilos aplicados específicamente a él.

## Conclusión

Ahora tienes una idea básica de cómo crear componentes en React, pasarles props y estilizarlos usando styled-components. Estos conceptos son esenciales para desarrollar aplicaciones eficientes y mantenibles con React. Recuerda explorar más sobre React y styled-components para aprovechar al máximo estas herramientas.
