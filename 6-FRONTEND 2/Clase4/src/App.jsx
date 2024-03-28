import React, { useEffect, useState } from "react";
import Products from "./components/Products";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState("Hola desde App");
  console.log("en componente en App");

  useEffect(() => {
    if (counter > 5 && counter <= 10) {
      setMessage(`Counter ya es mayor a 5`);
    } else if (counter > 10) {
      setMessage("Counter ya es mayor a 10");
    } else {
      setMessage("Hola desde App, empieza a contar");
    }
  }, [counter]);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
      <hr />
      <h2>{message}</h2>
      <Products />
    </div>
  );
};

export default App;
