import { useContext } from "react";
import ProductsContext from "../contexts/ProductsContext";
import Product from "./Product";

function ProductsTable() {
  const { productsData } = useContext(ProductsContext);
  return (
    <div>
      {productsData.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsTable;
