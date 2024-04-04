import React, { useState } from "react";

const Search = ({ handleSearch }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [order, setOrder] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "product") setName(value);
    if (name === "price") setPrice(value);
    if (name === "category") setCategory(value);
    if (name === "order") setOrder(!order);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const search = {
      name,
      price,
      category,
      sortByName: order,
    };

    handleSearch(search);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Buscar...</h2>
      <input
        type="text"
        name="product"
        placeholder="Buscar producto"
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Precio mínimo"
        onChange={handleChange}
      />
      <select
        name="category"
        id="category"
        placeholder="Categoría"
        defaultValue=""
        onChange={handleChange}
      >
        <option value="" disabled>
          Seleccione una categoria
        </option>
        <option value="category1">Categoria 1</option>
        <option value="category2">Categoria 2</option>
        <option value="category3">Categoria 3</option>
      </select>
      <input
        type="checkbox"
        name="order"
        placeholder="Ordenar alfabeticamente"
        checked={order}
        onChange={handleChange}
      />

      <button>Buscar</button>
    </form>
  );
};

export default Search;
