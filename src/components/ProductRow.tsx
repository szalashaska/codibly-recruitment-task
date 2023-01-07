import { Dispatch, SetStateAction } from "react";
import { ProductType } from "../helpers/types";
import { ProductData, ProductRowStyled } from "./ProductRow.styled";

type Props = {
  product: ProductType;
  setDetailData: Dispatch<SetStateAction<ProductType | null>>;
};

function ProductRow({ product, setDetailData }: Props) {
  const { id, name, color, year } = product;
  return (
    <ProductRowStyled
      background={color}
      onClick={() => {
        setDetailData(product);
      }}
    >
      <ProductData>{id}</ProductData>
      <ProductData>{name}</ProductData>
      <ProductData>{year}</ProductData>
    </ProductRowStyled>
  );
}

export default ProductRow;
