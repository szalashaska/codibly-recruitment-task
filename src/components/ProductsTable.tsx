import { useContext, useState } from "react";
import ProductsContext from "../contexts/ProductsContext";
import { ProductType } from "../helpers/types";
import ProductDetail from "./ProductDetail";
import ProductRow from "./ProductRow";
import {
  ProductsTableStyled,
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "./ProductsTable.styled";

function ProductsTable() {
  const { productsData } = useContext(ProductsContext);
  const [detailData, setDetailData] = useState<ProductType | null>(
    productsData[0]
  );
  return (
    <>
      <ProductsTableStyled>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Id</TableHeader>
              <TableHeader>Name</TableHeader>
              <TableHeader>Year</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {productsData.map((product) => (
              <ProductRow
                key={product.id}
                product={product}
                setDetailData={setDetailData}
              />
            ))}
          </TableBody>
        </Table>
      </ProductsTableStyled>
      <ProductDetail detailData={detailData} setDetailData={setDetailData} />
    </>
  );
}

export default ProductsTable;
