import Link from "next/link";
import styles from "./pagination.module.css";

export const Pagination = async ({
  page,
  totalPages,
  searchParams,
}: {
  page: number;
  totalPages: number;
  searchParams: Promise<{ [key: string]: string }>;
}) => {
  const localSearchParams = new URLSearchParams(await searchParams);
  const getPagedUrl = (page: number) => {
    localSearchParams.set("page", page.toString());
    return `?${localSearchParams.toString()}`;
  };
  if (totalPages > 5) {
    const start = Math.min(Math.max(1, page - 2), totalPages - 4);

    return (
      <footer className={styles.pagination}>
        {start > 1 && <Link href={getPagedUrl(1)}>1</Link>}
        {start > 2 && <span>...</span>}
        {Array.from({ length: 5 }).map((_, index) => (
          <Link
            key={index}
            href={getPagedUrl(start + index)}
            className={start + index === page ? styles.disabled : undefined}
          >
            {start + index}
          </Link>
        ))}
        {start + 5 < totalPages && <span>...</span>}
        {start + 4 < totalPages && (
          <Link href={getPagedUrl(totalPages)}>{totalPages}</Link>
        )}
      </footer>
    );
  } else if (totalPages > 1) {
    return (
      <footer className={styles.pagination}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <Link
            key={index}
            href={getPagedUrl(index + 1)}
            className={index + 1 === page ? styles.disabled : undefined}
          >
            {index + 1}
          </Link>
        ))}
      </footer>
    );
  }
};
