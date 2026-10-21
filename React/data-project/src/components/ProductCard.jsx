import React from "react";
import { Star, ShoppingCart, Heart, ArrowUpRight } from "lucide-react";

const ProductCard = ({ product, onAddToCart }) => {
  const discountedPrice =
    product.price - (product.price * product.discountPercentage) / 100;

  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Product Image */}
      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-slate-50 p-6">
        <img
          src={product.thumbnail || product.images?.[0]}
          alt={product.title}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
        />

        {/* Discount Badge */}
        {product.discountPercentage > 0 && (
          <span className="absolute left-4 top-4 rounded-lg bg-rose-500 px-3 py-1.5 text-xs font-bold text-white">
            -{Math.round(product.discountPercentage)}% OFF
          </span>
        )}

        {/* Wishlist Button */}
        <button
          type="button"
          aria-label="Add to wishlist"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm transition hover:bg-rose-50 hover:text-rose-500"
        >
          <Heart size={19} />
        </button>

        {/* Stock Badge */}
        <span
          className={`absolute bottom-4 left-4 rounded-full px-3 py-1 text-xs font-semibold ${
            product.availabilityStatus === "In Stock"
              ? "bg-emerald-100 text-emerald-700"
              : "bg-rose-100 text-rose-700"
          }`}
        >
          {product.availabilityStatus}
        </span>
      </div>

      {/* Product Details */}
      <div className="p-5">
        <p className="text-xs font-bold uppercase tracking-widest text-indigo-600">
          {product.brand || product.category}
        </p>

        <h2 className="mt-2 line-clamp-1 text-lg font-bold text-slate-900">
          {product.title}
        </h2>

        <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-slate-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-md bg-amber-50 px-2 py-1 text-amber-600">
            <Star size={15} fill="currentColor" />
            <span className="text-sm font-bold">{product.rating}</span>
          </div>

          <span className="text-xs text-slate-400">
            {product.reviews?.length || 0} reviews
          </span>
        </div>

        {/* Price */}
        <div className="mt-5 flex items-end justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-extrabold text-slate-900">
                ${discountedPrice.toFixed(2)}
              </span>
              {product.discountPercentage > 0 && (
                <span className="text-sm text-slate-400 line-through">
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>
            <p className="mt-1 text-xs text-slate-500">
              {product.stock} items available
            </p>
          </div>

          <button
            type="button"
            onClick={() => onAddToCart?.(product)}
            disabled={product.stock <= 0}
            aria-label={`Add ${product.title} to cart`}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white transition hover:bg-indigo-700 active:scale-95 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            <ShoppingCart size={19} />
          </button>
        </div>

        {/* Shipping Information */}
        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
          <span className="text-xs text-slate-500">
            {product.shippingInformation || "Shipping details unavailable"}
          </span>
          <button
            type="button"
            className="flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800"
            onClick={() => console.log("Product details:", product.id)}
          >
            Details <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
