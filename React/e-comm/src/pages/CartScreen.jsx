import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";
import { ShoppingBag, Trash2, Plus, Minus, ArrowLeft } from "lucide-react";

const CartScreen = () => {
  const { cartItems } = useContext(MyStore);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0,
  );

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 text-center">
        {" "}
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-indigo-100">
          {" "}
          <ShoppingBag size={42} className="text-indigo-600" />{" "}
        </div>
        <h1 className="text-3xl font-bold text-slate-900">
          Your cart is empty
        </h1>
        <p className="mt-3 max-w-sm text-slate-500">
          Looks like you haven't added anything to your cart yet. Explore our
          collection and find something you love.
        </p>
        <a
          href="/"
          className="mt-7 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
        >
          Continue Shopping
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 sm:px-8 lg:px-16">
      {" "}
      <div className="mx-auto max-w-7xl">
        {/* Header */}{" "}
        <div className="mb-10">
          {" "}
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Your Shopping Bag{" "}
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Shopping Cart
          </h1>
          <p className="mt-2 text-slate-500">
            You have {cartItems.length} item(s) in your cart.
          </p>
        </div>
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="space-y-4 lg:col-span-2">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center"
              >
                {/* Product Image */}
                <div className="flex h-36 w-full shrink-0 items-center justify-center rounded-xl bg-slate-50 p-4 sm:h-32 sm:w-32">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="flex min-w-0 flex-1 flex-col justify-between gap-4">
                  <div>
                    <h2 className="line-clamp-2 text-base font-semibold leading-6 text-slate-900 sm:text-lg">
                      {item.title}
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">
                      Category: {item.category}
                    </p>

                    <p className="mt-2 text-lg font-bold text-indigo-600">
                      ${Number(item.price).toFixed(2)}
                    </p>
                  </div>

                  {/* Quantity + Remove UI */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3 rounded-lg border border-slate-200 px-3 py-2">
                      <button
                        type="button"
                        aria-label="Decrease quantity"
                        className="text-slate-500 transition hover:text-indigo-600"
                      >
                        <Minus size={16} />
                      </button>

                      <span className="min-w-4 text-center text-sm font-semibold text-slate-900">
                        {item.quantity || 1}
                      </span>

                      <button
                        type="button"
                        aria-label="Increase quantity"
                        className="text-slate-500 transition hover:text-indigo-600"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <button
                      type="button"
                      className="flex items-center gap-2 text-sm font-medium text-red-500 transition hover:text-red-700"
                    >
                      <Trash2 size={16} />
                      Remove
                    </button>
                  </div>
                </div>

                {/* Item Total */}
                <div className="border-t border-slate-100 pt-4 text-left sm:min-w-24 sm:border-0 sm:pt-0 sm:text-right">
                  <p className="text-xs text-slate-500">Item Total</p>
                  <p className="mt-1 text-lg font-bold text-slate-900">
                    ${(item.price * (item.quantity || 1)).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}

            <a
              href="/"
              className="inline-flex items-center gap-2 pt-3 text-sm font-semibold text-indigo-600 transition hover:text-indigo-800"
            >
              <ArrowLeft size={17} />
              Continue Shopping
            </a>
          </div>

          {/* Order Summary */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-8">
            <h2 className="text-xl font-bold text-slate-900">Order Summary</h2>

            <div className="mt-6 space-y-4">
              <div className="flex justify-between text-sm text-slate-500">
                <span>Subtotal</span>
                <span className="font-medium text-slate-900">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between text-sm text-slate-500">
                <span>Shipping</span>
                <span className="font-medium text-emerald-600">Free</span>
              </div>

              <div className="flex justify-between text-sm text-slate-500">
                <span>Tax</span>
                <span className="font-medium text-slate-900">$0.00</span>
              </div>

              <div className="border-t border-slate-200 pt-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-900">Total</span>
                  <span className="text-2xl font-bold text-indigo-600">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="mt-7 w-full rounded-xl bg-indigo-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700 active:scale-[0.98]"
            >
              Proceed to Checkout
            </button>

            <p className="mt-4 text-center text-xs text-slate-400">
              Secure checkout · Free shipping
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
