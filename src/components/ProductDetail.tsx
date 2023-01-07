import { Dispatch, SetStateAction } from "react";
import { ProductType } from "../helpers/types";
import {
  CloseButton,
  CloseIco,
  DetailDescribtion,
  DetailText,
  Modal,
  ProductDetailStyled,
} from "./ProductDetail.styled";

type Props = {
  detailData: ProductType | null;
  setDetailData: Dispatch<SetStateAction<ProductType | null>>;
};

function ProductDetail({ detailData, setDetailData }: Props) {
  if (!detailData) return null;
  const { id, name, color, pantone_value, year } = detailData;

  return (
    <Modal>
      <ProductDetailStyled color={color}>
        <CloseButton onClick={() => setDetailData(null)}>
          <CloseIco />
        </CloseButton>
        <DetailText>
          <DetailDescribtion>Id: </DetailDescribtion>
          {id}
        </DetailText>
        <DetailText>
          <DetailDescribtion>Name: </DetailDescribtion>
          {name}
        </DetailText>
        <DetailText>
          <DetailDescribtion>Year: </DetailDescribtion>
          {year}
        </DetailText>
        <DetailText>
          <DetailDescribtion>Color: </DetailDescribtion>
          {color}
        </DetailText>
        <DetailText>
          <DetailDescribtion>Pantone value: </DetailDescribtion>
          {pantone_value}
        </DetailText>
      </ProductDetailStyled>
    </Modal>
  );
}

export default ProductDetail;
