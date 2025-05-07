import Link from "next/link";
import styles from "./pagination.module.css";

export const Pagination = ({
  page,
  totalPages,
  url,
}: {
  page: number;
  totalPages: number;
  url: string;
}) => {
  if (totalPages <= 1) {
    return null;
  }
  if (totalPages > 5) {
    const start = Math.min(Math.max(1, page - 2), totalPages - 4);

    return (
      <footer className={styles.pagination}>
        {start > 1 && <Link href={`${url}?page=${1}`}>1</Link>}
        {start > 2 && <span>...</span>}
        {Array.from({ length: 5 }).map((_, index) => (
          <Link
            key={index}
            href={`${url}?page=${start + index}`}
            className={start + index === page ? styles.disabled : undefined}
          >
            {start + index}
          </Link>
        ))}
        {start + 5 < totalPages && <span>...</span>}
        {start + 4 < totalPages && (
          <Link href={`${url}?page=${totalPages}`}>{totalPages}</Link>
        )}
      </footer>
    );
  } else {
    return (
      <footer className={styles.pagination}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <Link
            key={index}
            href={`${url}?page=${index + 1}`}
            className={index + 1 === page ? styles.disabled : undefined}
          >
            {index + 1}
          </Link>
        ))}
      </footer>
    );
  }
};
