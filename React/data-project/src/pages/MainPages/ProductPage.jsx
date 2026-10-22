import ProductCard from "../../components/ProductCard";
import { useProduct } from "../../hooks/useProducts";

const ProductPage = () => {
  let { data, isPending } = useProduct();

  if (isPending) return <h1>Loading...</h1>;

  return (
    <div className="grid grid-cols-4 gap-2">
      {data.products.map((val) => (
        <ProductCard key={val.id} product={val} />
      ))}
    </div>
  );
};

export default ProductPage;
