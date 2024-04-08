import React from "react";
import useCounter from "../store/useCounter";

const Button2 = () => {
  const { inc } = useCounter();

  return <button onClick={() => inc()}>Button2</button>;
};

export default Button2;
