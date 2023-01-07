export type ProductType = {
  color: string;
  id: number;
  name: string;
  pantone_value: string;
  year: number;
};

export type ApiDataType = {
  data: ProductType[] | ProductType;
  page?: number;
  per_page?: number;
  total?: number;
  total_pages?: number;
};

export type ProductsContextType = {
  productsData: ProductType[];
  currentPage: number | undefined;
  totalPages: number | undefined;
  productId: number | undefined;
  changeCurrentPage: (pageNumber: number) => void;
  changeProductsPerPage: (perPage: number) => void;
  filterById: (id: number) => void;
};
