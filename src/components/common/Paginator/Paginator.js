import styles from "./Paginator.module.css";

const Paginator = ({
  totalUsersCount,
  pageSize,
  handlePageChange,
  currentPage,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    if (pages.length < 10) {
      pages.push(i);
    }
  }

  return (
    <ul className={styles.pagination}>
      {pages.map((p) => (
        <li
          onClick={() => handlePageChange(p)}
          className={currentPage === p ? styles.current : ""}
          key={p}
        >
          {p}
        </li>
      ))}
    </ul>
  );
};
 
export default Paginator;