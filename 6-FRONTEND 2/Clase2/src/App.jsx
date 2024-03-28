import Title from "./components/title";
import Subtitle from "./components/subtitle";
import Button from "./components/button";
import "./global.css";

function App() {
  return (
    <div className="container">
      <Title title={"hola"} />
      <Title title={"soy un titulo"} />
      <Subtitle />
      <Button />
      <Button textButton="Volver atrás" />
      <Button textButton="Ir al carrito" color="red" />
      <Button textButton="Ir al carrito" color="blue" />
    </div>
  );
}

export default App;
