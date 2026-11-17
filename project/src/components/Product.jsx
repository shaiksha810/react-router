
const Product = ({ product }) => {
  return (
    <div className="w-full min-w-0 bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg transition duration-300">

      {/* Product Image */}
      <div className="w-full h-44 sm:h-48 md:h-52 bg-gray-50 rounded-lg flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col gap-3 mt-4">

        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
          {product.category}
        </span>

        <h1 className="text-base font-bold text-gray-900 line-clamp-2 min-h-12">
          {product.title}
        </h1>

        {/* Rating */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-yellow-500 text-base">
            ★★★★☆
          </span>

          <span className="text-xs text-gray-500">
            {product.rating.rate} ({product.rating.count})
          </span>
        </div>

        {/* Price */}
        <h2 className="text-xl font-bold text-gray-900">
          ${product.price}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-5 line-clamp-2">
          {product.description}
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-2 mt-2">
          <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
            Add to Cart
          </button>

          <button className="w-full border border-gray-300 text-gray-800 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-100 transition">
            Buy Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default Product;
