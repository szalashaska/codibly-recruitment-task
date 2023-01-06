export type ProductType = {
  color: string;
  id: number;
  name: string;
  pantone_value: string;
  year: number;
};

export type ApiDataType = {
  data: ProductType[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
};

export type ApiDataByIdType = {
  data: ProductType;
};

export type ProductsContextType = {
  productsData: ProductType[];
  currentPage: number | null;
  totalPages: number | null;
  changeCurrentPage: (pageNumber: number) => void;
  changeProductsPerPage: (perPage: number) => void;
  filterById: (id: number) => void;
};
