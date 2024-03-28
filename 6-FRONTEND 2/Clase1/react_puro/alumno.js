const Alumno = ({ nombre, edad }) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, `Nombre ${nombre}`),
    React.createElement("h3", {}, `Edad ${edad}`),
  ]);
};

export default Alumno;
