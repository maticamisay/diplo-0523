import React from "react";

const Button = ({ setCounter }) => {
  return (
    <button onClick={() => setCounter((prev) => prev + 1)}>
      Incrementar +1
    </button>
  );
};

export default Button;
