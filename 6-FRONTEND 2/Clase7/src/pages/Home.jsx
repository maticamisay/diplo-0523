import React from "react";
import useLogin from "../store/useLogin";

const Home = () => {
  const { username } = useLogin();
  return (
    <section>
      <h1>Home</h1>
      {username ? (
        <h2>Bienvenido {username}</h2>
      ) : (
        <h2>Por favor inicia sesión para ver los productos</h2>
      )}
    </section>
  );
};

export default Home;
