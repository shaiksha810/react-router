import { useContext } from "react";
import { AppStore } from "../context/ContextApi";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const { productsData } = useContext(AppStore);

  
  
  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4">
      {productsData.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
