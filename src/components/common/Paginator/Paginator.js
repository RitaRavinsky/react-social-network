import { useState } from "react";
import styles from "./Paginator.module.css";

const Paginator = ({
  totalItemsCount,
  pageSize,
  handlePageChange,
  currentPage=1,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionNumber = portionNumber * portionSize;
  let filteredPages = pages.filter(
    (p) => p >= leftPortionPageNumber && p <= rightPortionNumber
  );

  return (
    <ul className={styles.pagination}>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          Prev
        </button>
      )}
      {filteredPages.map((p) => (
        <li
          onClick={() => handlePageChange(p)}
          className={currentPage === p ? styles.current : ""}
          key={p}
        >
          {p}  
        </li>
      ))}

      {portionCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          Next
        </button>
      )}
    </ul>
  );
};

export default Paginator;
