import React from "react";
import "./styles.css";

const Title = ({ title = "Como estás?" }) => {
  return <h1>{title}</h1>;
};

export default Title;
