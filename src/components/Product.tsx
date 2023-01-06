import { ProductType } from "../helpers/types";
import { ProductStyled } from "./Product.styled";

type Props = {
  product: ProductType;
};

function Product({ product }: Props) {
  const { id, name, color, pantone_value, year } = product;
  return (
    <ProductStyled color={color}>
      <div>{id}</div>
      <div>{color}</div>
      <div>{name}</div>
      <div>{pantone_value}</div>
      <div>{year}</div>
    </ProductStyled>
  );
}

export default Product;
