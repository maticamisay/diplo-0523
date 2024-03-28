import useGetProducts from "../hooks/useGetProducts";

const Products = () => {
  const { products, loading } = useGetProducts();

  if (loading) return <p>Cargando...</p>;
  return (
    <div>
      <h1 className="">Estos son los productos</h1>
      {products
        .sort((a, b) => a.title.localeCompare(b.title))
        .map((productito, index) => (
          <div key={productito.id}>
            <h3>{productito.title}</h3>
            <span>$ {productito.price}</span>
          </div>
        ))}
    </div>
  );
};

export default Products;
