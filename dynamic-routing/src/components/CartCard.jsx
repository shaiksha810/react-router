
import { useState } from "react";

const CartCard = ({ product }) => {
    
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const subtotal = product.price * quantity;

  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center">

      {/* Product Image */}
      <div className="flex h-40 w-full items-center justify-center rounded-xl bg-gray-50 p-4 sm:w-36">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col gap-3">

        <span className="w-fit rounded-full bg-green-100 px-3 py-1 text-xs font-semibold capitalize text-green-700">
          {product.category}
        </span>

        <h2 className="text-lg font-bold text-gray-800">
          {product.title}
        </h2>

        <div className="flex items-center gap-2">
          <span className="text-yellow-500">★</span>

          <span className="text-sm font-semibold text-gray-800">
            {product.rating?.rate}
          </span>

          <span className="text-sm text-gray-500">
            ({product.rating?.count} reviews)
          </span>
        </div>

        <p className="text-sm leading-6 text-gray-500">
          {product.description}
        </p>

        <p className="text-xl font-bold text-green-700">
          ${product.price.toFixed(2)}
        </p>

      </div>

      {/* Quantity and Subtotal */}
      <div className="flex flex-row items-center justify-between gap-4 sm:flex-col sm:items-end">

        <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-1">

          <button
            onClick={decreaseQuantity}
            className="px-3 py-1 text-lg hover:bg-gray-100"
          >
            -
          </button>

          <span className="font-semibold">
            {quantity}
          </span>

          <button
            onClick={increaseQuantity}
            className="px-3 py-1 text-lg hover:bg-gray-100"
          >
            +
          </button>

        </div>

        <p className="font-bold text-gray-800">
          ${subtotal.toFixed(2)}
        </p>

        <button
          onClick={() => onRemove(product.id)}
          className="text-sm font-medium text-red-500 hover:text-red-700"
        >
          Remove
        </button>

      </div>

    </div>
  );
};

export default CartCard
