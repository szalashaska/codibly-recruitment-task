import { useContext } from "react";
import ProductsContext from "../contexts/ProductsContext";
import { PaginationStyled, PaginationButton } from "./Pagination.styled";

function Pagination() {
  const { currentPage, totalPages, changeCurrentPage } =
    useContext(ProductsContext);

  if (!currentPage || !totalPages) return null;

  const handlePageChange: (page: number) => void = (page) => {
    if (currentPage + page > totalPages || currentPage + page < 1) return;
    changeCurrentPage(page);
  };

  return (
    <PaginationStyled>
      <PaginationButton
        onClick={() => handlePageChange(-1)}
        disabled={currentPage === 1}
      >
        &lt;
      </PaginationButton>
      <span>
        {currentPage} of {totalPages}
      </span>
      <PaginationButton
        onClick={() => handlePageChange(1)}
        disabled={currentPage + 1 > totalPages}
      >
        &gt;
      </PaginationButton>
    </PaginationStyled>
  );
}

export default Pagination;
