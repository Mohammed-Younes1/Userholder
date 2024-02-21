import React from "react";

function Pagination({ totalPosts, postsPerPage, currentPage, setCurrentPage }) {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <nav className="flex pl-[14%] py-10">
      <ul className="list-none flex">
        <li>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="relative block rounded bg-transparent px-3 py-1.5 w-[100px] text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Previous 
          </button>
        </li>
        {pages.map((page) => (
          <li key={page}>
            <button
              onClick={() => setCurrentPage(page)}
              className={`relative block rounded bg-transparent px-3 py-1.5 text-sm transition-all duration-300 ${
                currentPage === page
                  ? "text-black font-bold"
                  : "text-neutral-600 dark:text-gray-400"
              } hover:bg-neutral-100 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(prev + 1, Math.ceil(totalPosts / postsPerPage))
              )
            }
            className="relative block rounded bg-transparent px-3 py-1.5 w-[100px] text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
