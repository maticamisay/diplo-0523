import React from "react";
import PropDrillingExample from "./components/page1";
import GlobalStateExample from "./components/page2";
import useCounter from "./store/useCounter";

const App = () => {
  const [counter, setCounter] = React.useState(1);
  const { count } = useCounter();
  return (
    <div>
      App
      <hr />
      {counter}
      <PropDrillingExample setCounter={setCounter} />
      <hr />
      {count}
      <GlobalStateExample />
    </div>
  );
};

export default App;
