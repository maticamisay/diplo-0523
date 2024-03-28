import React, { useState } from "react";
import Boton from "../components/Button";
import ErrorSpan from "../components/ErrorSpan";
import Input from "../components/Input";
import FormGroup from "../components/FormGroup";
import Container from "../components/Container";
import Form from "../components/Form";

const CreateProduct = ({ redirect }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errorFinded = false;
    if (!name || name.length < 5) {
      setErrors((prev) => ({
        ...prev,
        name: { message: "Este campo es requerido" },
      }));
      errorFinded = true;
    } else {
      setErrors((prev) => ({
        ...prev,
        name: null,
      }));
    }
    if (!price || !Number(price)) {
      setErrors((prev) => ({
        ...prev,
        price: { message: "Este campo es requerido" },
      }));
      errorFinded = true;
    } else {
      setErrors((prev) => ({
        ...prev,
        price: null,
      }));
    }
    if (errorFinded) {
      return;
    }
    try {
      const newProduct = { title: name, price };
      const response = await fetch("http://localhost:3000/api/v1/products", {
        method: "post",
        body: JSON.stringify(newProduct),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        const message = await response.json();
        throw new Error(message.error || "Ocurrió un error inesperado");
      }
      redirect();
    } catch (error) {
      console.log(error);
      setErrors((prev) => ({
        ...prev,
        form: { message: "Ocurrió un error inesperado" },
      }));

      setTimeout(() => {
        setErrors((prev) => ({
          ...prev,
          form: null,
        }));
      }, 3000);
    }
  };

  return (
    <Container>
      <h1 className="text-3xl font-bold">Formulario para añadir</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="name">Nombre</label>
          <Input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Disco moderno 2tb..."
          />
          {errors.name && <ErrorSpan>{errors.name.message}</ErrorSpan>}
        </FormGroup>
        <FormGroup>
          <label htmlFor="price">Precio</label>
          <Input
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="40.99"
          />
          {errors.price && <ErrorSpan>{errors.price.message}</ErrorSpan>}
        </FormGroup>
        {errors.form && <ErrorSpan>{errors.form.message}</ErrorSpan>}
        <Boton>Guardar</Boton>
      </Form>
    </Container>
  );
};

export default CreateProduct;
