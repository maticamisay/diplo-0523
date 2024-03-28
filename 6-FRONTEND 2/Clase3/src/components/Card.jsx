import React from "react";

const Card = ({ color, borderColor, children }) => {
  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: color || "white",
        border: `1px solid ${borderColor || "black"}`,
      }}
    >
      {children}
    </div>
  );
};

export default Card;
