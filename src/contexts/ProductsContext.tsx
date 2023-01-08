import {
  createContext,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  ApiDataType,
  ProductsContextType,
  ProductType,
} from "../helpers/types";

// Constant values
const BASE_URL = "https://reqres.in/api/products";
const PRODUCTS_PER_PAGE = 5;
const URL_PARAMS = new URLSearchParams(window.location.pathname);

type Props = {
  children: ReactElement | ReactElement[];
};

const ProductsContext = createContext<ProductsContextType>({
  productsData: [],
  error: "",
  changeCurrentPage: () => {},
  changeProductsPerPage: () => {},
  filterById: () => {},
});
export default ProductsContext;

export function ProductsProvider({ children }: Props) {
  const checkUrlParams: (param: string) => number | undefined = (param) => {
    // Checks if user provided id or page number in URL
    const urlParam = URL_PARAMS.get(param);
    return urlParam && !isNaN(+urlParam) ? +urlParam : undefined;
  };

  const [productId, setProductId] = useState<number | undefined>(
    checkUrlParams("/id")
  );
  const [productsData, setProductsData] = useState<ProductType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(
    checkUrlParams("/page") || 1
  );
  const [productsPerPage, setProductsPerPage] =
    useState<number>(PRODUCTS_PER_PAGE);
  const [error, setError] = useState<string>("");
  const totalProductsRef = useRef<number | undefined>(undefined);
  const totalPagesRef = useRef<number | undefined>(undefined);

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

  const createEndpointURL: () => URL = useCallback(() => {
    const url = new URL(BASE_URL);
    if (productId) {
      url.searchParams.append("id", productId.toString());
    } else {
      url.searchParams.append("page", currentPage.toString());
      url.searchParams.append("per_page", productsPerPage.toString());
    }

    return url;
  }, [productsPerPage, currentPage, productId]);

  const updatePageURL: () => void = useCallback(() => {
    if (productId) {
      window.history.replaceState(null, "", `id=${productId}`);
    } else window.history.replaceState(null, "", `page=${currentPage}`);
  }, [currentPage, productId]);

  const getProductsData: () => Promise<void> = useCallback(async () => {
    // Calls API for data

    const endpoint = createEndpointURL();
    setError("");

    try {
      const request = await fetch(endpoint);
      const response = await request.json();

      if (request.ok) {
        const { data, total, total_pages } = response as ApiDataType;

        setProductsData(Array.isArray(data) ? data : [data]);
        totalProductsRef.current = total;
        totalPagesRef.current = total_pages;

        updatePageURL();
      } else if (request.status === 404) {
        setError("Wrong input provided.");
      } else setError("Something went wrong...");
    } catch (err) {
      let message = "Unknown error occurred.";
      if (err instanceof Error) message = err.message;
      setError(message);
    }
  }, [createEndpointURL, updatePageURL]);

  useEffect(() => {
    getProductsData();
  }, [getProductsData]);

  const contextData = {
    productId,
    productsData,
    currentPage,
    error,
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
