import React from "react";
import Pagination from "react-bootstrap/Pagination";
import { isEmpty } from "../utils/util";

const MPagination = ({ currentPage, pageSize, total, onPageChange }) => {
  const totalPages = Math.ceil(total / pageSize);

  const handlePageChange = (page) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  // Calculate the range of visible page numbers
  const MAX_VISIBLE_PAGES = 5;
  let startPage = 1;
  let endPage = totalPages;

  if (totalPages > MAX_VISIBLE_PAGES) {
    if (currentPage <= Math.floor(MAX_VISIBLE_PAGES / 2) + 1) {
      endPage = MAX_VISIBLE_PAGES;
    } else if (currentPage >= totalPages - Math.floor(MAX_VISIBLE_PAGES / 2)) {
      startPage = totalPages - MAX_VISIBLE_PAGES + 1;
    } else {
      startPage = currentPage - Math.floor(MAX_VISIBLE_PAGES / 2);
      endPage = currentPage + Math.floor(MAX_VISIBLE_PAGES / 2);
    }
  }

  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  const paginationItems = pageNumbers.map((page) => (
    <Pagination.Item
      key={page}
      active={page === currentPage}
      onClick={() => handlePageChange(page)}
    >
      {page}
    </Pagination.Item>
  ));

  return (
    <>
      {!isEmpty(pageNumbers) && (
        <Pagination className="mb-0 mx-sm-2">
          <Pagination.First onClick={() => handlePageChange(1)} />
          {2 < currentPage && <Pagination.Item>...</Pagination.Item>}
          {paginationItems}
          {totalPages > currentPage + 2 && (
            <Pagination.Item>...</Pagination.Item>
          )}
          <Pagination.Last onClick={() => handlePageChange(totalPages)} />
        </Pagination>
      )}
    </>
  );
};

export default MPagination;
