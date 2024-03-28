import { useEffect, useState } from "react";

const useGetProducts = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("http://localhost:3000/api/v1/products");
      const products = await response.json();
      setProducts(products.data);
      setLoading(false);
    };

    getProducts();
  }, []);

  return { products, loading };
};

export default useGetProducts;
