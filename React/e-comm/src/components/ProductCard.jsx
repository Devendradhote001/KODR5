import { ShoppingCart, Star } from "lucide-react";
import { useContext } from "react";
import { MyStore } from "../context/MyContext";

const ProductCard = ({ product, quantity }) => {
  let { setCartItems, incrementQuantity, decrementQuantity } =
    useContext(MyStore);

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900">
      {/* Product Image */}
      <div className="relative flex h-64 items-center justify-center bg-gray-50 p-6 dark:bg-gray-800">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />

        <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-medium capitalize text-gray-700 shadow-sm dark:bg-gray-700 dark:text-gray-200">
          {product.category}
        </span>
      </div>
      {/* Product Details */}
      <div className="flex flex-1 flex-col p-5">
        <h2 className="line-clamp-2 min-h-12 text-base font-semibold text-gray-900 dark:text-white">
          {product.title}
        </h2>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-2">
          <Star size={17} className="fill-yellow-400 text-yellow-400" />

          <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
            {product.rating?.rate ?? "N/A"}
          </span>

          <span className="text-sm text-gray-500">
            ({product.rating?.count ?? 0} reviews)
          </span>
        </div>

        {/* Price and Cart Button */}
        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <div>
            <p className="text-xs text-gray-500">Price</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              ${Number(product.price).toFixed(2)}
            </p>
          </div>

          {quantity ? (
            <div className="flex gap-5 items-center">
              <button
                onClick={() => decrementQuantity(product.id)}
                className="py-1 px-4 rounded flex justify-center items-center bg-red-600 text-white border-0"
              >
                -
              </button>
              <p>{quantity}</p>
              <button
                onClick={() => incrementQuantity(product.id)}
                className="py-1 px-4 rounded flex justify-center items-center bg-green-600 text-white border-0"
              >
                +
              </button>
            </div>
          ) : (
            <button
              onClick={() =>
                setCartItems((prev) => [...prev, { ...product, quantity: 1 }])
              }
              className="flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-gray-700 active:scale-95 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
            >
              <ShoppingCart size={17} />
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
