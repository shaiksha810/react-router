import axios from "axios";
import { useContext, useEffect } from "react";
import { AppStore } from "../context/ContextApi";

const Home = () => {
  const { setProductsData } = useContext(AppStore);

  const getProducts = async () => {
    try {
      const products = await axios.get("https://fakestoreapi.com/products");
      setProductsData(products.data);
    } catch (error) {
      console.log("Api error:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return <div>Home</div>;
};

export default Home;
