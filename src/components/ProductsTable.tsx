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
  EmptyData,
} from "./ProductsTable.styled";

function ProductsTable() {
  const { productsData, error } = useContext(ProductsContext);
  const [detailData, setDetailData] = useState<ProductType | null>(null);

  if (error)
    return (
      <div>
        {error} <a href="/"> Refresh page</a>.
      </div>
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
            {productsData.length > 0 ? (
              productsData.map((product) => (
                <ProductRow
                  key={product.id}
                  product={product}
                  setDetailData={setDetailData}
                />
              ))
            ) : (
              <TableRow>
                <EmptyData>
                  There is no data to show.{" "}
                  <a href="/">Go back to the first page</a>.
                </EmptyData>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </ProductsTableStyled>
      <ProductDetail detailData={detailData} setDetailData={setDetailData} />
    </>
  );
}

export default ProductsTable;
