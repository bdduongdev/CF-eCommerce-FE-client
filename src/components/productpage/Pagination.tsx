const Pagination = ({ currentPage, totalPages, onPageChange }: any) => {
  const createPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      // Hiển thị tất cả nếu ít trang
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Luôn hiển thị trang 1
      pages.push(1);

      if (currentPage > 3) pages.push("left-ellipsis");

      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) pages.push("right-ellipsis");

      // Luôn hiển thị trang cuối
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = createPageNumbers();

  return (
    <div className="mt-8 flex justify-center items-center space-x-2 text-sm">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 border rounded hover:bg-green-600 hover:text-white transition disabled:opacity-50"
      >
        «
      </button>

      {pageNumbers.map((page, idx) =>
        page === "left-ellipsis" || page === "right-ellipsis" ? (
          <span key={`ellipsis-${idx}`} className="px-2">...</span>
        ) : (
          <button
            key={`page-${page}`}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 border rounded transition ${
              currentPage === page
                ? "bg-green-600 text-white"
                : "hover:bg-green-600 hover:text-white"
            }`}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border rounded hover:bg-green-600 hover:text-white transition disabled:opacity-50"
      >
        »
      </button>
    </div>
  );
};

export default Pagination  ;