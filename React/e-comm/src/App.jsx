import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartScreen from "./components/CartScreen";
import { useContext } from "react";
import { MyStore } from "./context/MyContext";

const App = () => {
  let { toggle, productsData, cartItems } = useContext(MyStore);

  return (
    <div>
      <Navbar />

      {toggle ? (
        <CartScreen />
      ) : (
        <div className="grid gap-4 px-10 py-2 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
          {productsData?.map((val) => {
            let isInCart = cartItems.find((elem) => elem.id === val.id);

            return <ProductCard key={val.id} product={val} quantity={isInCart?.quantity} />;
          })}
        </div>
      )}
    </div>
  );
};

export default App;
