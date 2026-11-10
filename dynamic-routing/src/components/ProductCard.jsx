import { useContext } from "react";
import { AppStore } from "../context/ContextApi";

const ProductCard = ({ product }) => {



    const {cartData, setCartData} = useContext(AppStore)
    const {productsData} = useContext(AppStore)

    const handleCart = (id) => {
      const cartItem = productsData.find(p => p.id === id)
      
      setCartData([...cartData, cartItem])  
    }


  return (
    <div
      key={product.id}
      className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Product Image */}
      <div className="flex h-56 items-center justify-center bg-gray-50 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col p-5">
        <span className="mb-3 w-fit rounded-full bg-green-100 px-3 py-1 text-xs font-medium capitalize text-green-700">
          {product.category}
        </span>

        <h2 className="line-clamp-2 text-lg font-bold text-gray-900">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-yellow-500">★</span>
          <span className="font-semibold text-gray-800">
            {product.rating?.rate}
          </span>
          <span className="text-sm text-gray-500">
            ({product.rating?.count})
          </span>
        </div>

        {/* Description */}
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
          {product.description}
        </p>

        {/* Price */}
        <p className="mt-auto pt-5 text-2xl font-bold text-green-700">
          ${product.price}
        </p>

        {/* Buttons */}
        <div className="mt-4 flex flex-col gap-2">
          <button 
          onClick={() => handleCart(product.id)}
          className="rounded-lg bg-green-700 px-4 py-2.5 font-semibold text-white transition hover:bg-green-800">
            Add to Cart
          </button>

          <button className="rounded-lg border border-gray-300 px-4 py-2.5 font-semibold text-gray-700 transition hover:bg-gray-100">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
