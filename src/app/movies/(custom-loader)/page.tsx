import { Header } from "@/shared/components/header/header";
import styles from "./page.module.css";
import { api } from "@/api/api";
import { Pagination } from "@/shared/components/pagination/pagination";
import { renderLinkItem } from "@/shared/helpers/renderLinkItem";
import { notFound } from "next/navigation";

export default async function Movies({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const page = Number((await searchParams).page ?? 1);
  const moviesResponse = await api.getMovies(page);

  if (moviesResponse.status !== 200) {
    notFound();
  }

  const movies = moviesResponse.data;

  return (
    <>
      <Header title="Movies" />
      <main className={styles.main}>
        <ul>{renderLinkItem(movies.docs, "/movies")}</ul>
      </main>
      <Pagination page={page} totalPages={movies.pages} url="/movies" />
    </>
  );
}
