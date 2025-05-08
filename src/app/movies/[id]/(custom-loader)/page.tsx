import Link from "next/link";
import styles from "./page.module.css";
import { api } from "@/api/api";
import { notFound } from "next/navigation";
import { Header } from "@/shared/components/header/header";
import { renderItem } from "@/shared/helpers/renderItem";
import { omit } from "lodash";

export default async function Movie({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const movieResponse = await api.getMovie(id);
  const quotesResponse = await api.getMovieQuotes(id, 1, 1);

  if (movieResponse.status !== 200) {
    notFound();
  }

  const movie = movieResponse.data;

  return (
    <>
      <Header title={movie.name}>
        {quotesResponse.status === 200 &&
          quotesResponse.data.docs.length > 0 && (
            <Link href={`/movies/${id}/quotes`}>View Movie Quotes</Link>
          )}
      </Header>
      <main className={styles.main}>
        {renderItem(omit(movie, ["_id", "name"]))}
      </main>
    </>
  );
}
