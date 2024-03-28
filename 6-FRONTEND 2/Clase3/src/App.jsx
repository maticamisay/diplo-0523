import Card from "./components/Card";
import CardProduct from "./components/CardProduct";

function App() {
  return (
    <>
      <Card>
        hola chicos
        <h2>como estan</h2>
        <button>comprar</button>
      </Card>

      <CardProduct title={"disco ssd"}>
        disco en buen estado de 500gb
      </CardProduct>

      <CardProduct title={"memoria ram"}>memoria ram de 8gb</CardProduct>
    </>
  );
}

export default App;
