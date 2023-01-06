import {
  createContext,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  ApiDataByIdType,
  ApiDataType,
  ProductsContextType,
  ProductType,
} from "../helpers/types";

const BASE_URL = "https://reqres.in/api/products";
const PRODUCTS_PER_PAGE = 5;

type Props = {
  children: ReactElement | ReactElement[];
};

const ProductsContext = createContext<ProductsContextType>({
  productsData: [],
  currentPage: null,
  totalPages: null,
  changeCurrentPage: () => {},
  changeProductsPerPage: () => {},
  filterById: () => {},
});
export default ProductsContext;

export function ProductsProvider({ children }: Props) {
  const [productId, setProductId] = useState<number | null>(null);
  const [productsData, setProductsData] = useState<ProductType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage, setProductsPerPage] =
    useState<number>(PRODUCTS_PER_PAGE);
  const totalProductsRef = useRef<number | null>(null);
  const totalPagesRef = useRef<number | null>(null);

  const changeCurrentPage: (pageNumber: number) => void = useCallback(
    (pageNumber) => {
      setCurrentPage((prev) => prev + pageNumber);
    },
    []
  );

  const changeProductsPerPage: (perPage: number) => void = useCallback(
    (perPage) => {
      setProductsPerPage(perPage);
    },
    []
  );

  const filterById: (id: number) => void = useCallback((id) => {
    setProductId(id);
  }, []);

  const createURL: () => URL = useCallback(() => {
    const url = new URL(BASE_URL);
    url.searchParams.append("page", currentPage.toString());
    url.searchParams.append("per_page", productsPerPage.toString());
    // url.searchParams.append("id", "1");

    return url;
  }, [productsPerPage, currentPage]);

  const updatePageURL: () => void = useCallback(() => {
    if (productId) {
      window.history.replaceState(null, "", `id=${productId}`);
    } else window.history.replaceState(null, "", `page=${currentPage}`);
  }, [currentPage, productId]);

  const getProductById: () => Promise<void> = useCallback(async () => {
    const endpoint = `${BASE_URL}?id=${productId}`;

    try {
      const request = await fetch(endpoint);
      const response = await request.json();

      if (request.ok) {
        const { data } = response as ApiDataByIdType;
        setProductsData([data]);
        totalProductsRef.current = null;
        totalPagesRef.current = null;

        updatePageURL();
      }
    } catch (err) {
      console.log(err);
    }
  }, [updatePageURL, productId]);

  const getProductsData: () => Promise<void> = useCallback(async () => {
    const endpoint = createURL();

    try {
      const request = await fetch(endpoint);
      const response = await request.json();

      if (request.ok) {
        const { data, total, total_pages } = response as ApiDataType;
        setProductsData(data);
        totalProductsRef.current = total;
        totalPagesRef.current = total_pages;

        updatePageURL();
      }
    } catch (err) {
      console.log(err);
    }
  }, [createURL, updatePageURL]);

  useEffect(() => {
    if (productId) getProductById();
    else getProductsData();
  }, [getProductsData, changeCurrentPage, getProductById, productId]);

  const contextData = {
    productsData,
    currentPage,
    totalPages: totalPagesRef.current,
    changeCurrentPage,
    changeProductsPerPage,
    filterById,
  };

  return (
    <ProductsContext.Provider value={contextData}>
      {children}
    </ProductsContext.Provider>
  );
}
