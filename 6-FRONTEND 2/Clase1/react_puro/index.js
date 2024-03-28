import Alumno from "./alumno.js";

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement(Alumno, { nombre: "matias", edad: 18 }),
    React.createElement(Alumno, { nombre: "juan", edad: 24 }),
    React.createElement(Alumno, { nombre: "juan", edad: 24 }),
    React.createElement(Alumno, { nombre: "juan", edad: 24 }),
    React.createElement(Alumno, { nombre: "juan", edad: 24 })
  );
};

const rootDiv = document.querySelector("#root");
ReactDOM.render(React.createElement(App), rootDiv);
