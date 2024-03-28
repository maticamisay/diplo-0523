import React from "react";

const Input = ({ value }) => {
  console.log("en input");
  return (
    <form>
      <input type="text" value={value} />
      <button>Enviar</button>
    </form>
  );
};

export default Input;
