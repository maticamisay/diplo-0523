import React from "react";
import "./styles.css";

const Button = ({ textButton = "Guardar", color }) => {
  return (
    <div className="container">
      <button
        style={{
          backgroundColor: color,
        }}
      >
        {textButton}
      </button>
    </div>
  );
};

export default Button;
