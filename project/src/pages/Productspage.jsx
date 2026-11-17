import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../components/Product";
import { axiosInstance } from "../config/axiosInstance";

const Productspage = () => {
  const [productsData, setProductsdata] = useState([]);

  const getProducts = async () => {
    const products = await axiosInstance.get("/products")
    setProductsdata(products.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="w-full grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 p-4 md:p-6">
      {productsData.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Productspage;
