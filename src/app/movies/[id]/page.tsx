import Link from "next/link";
import styles from "./page.module.css";
import { api } from "@/api/api";
import { notFound } from "next/navigation";
import { Header } from "@/shared/components/header/header";

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
        <ul>
          <li>
            <strong>Academy Award Nominations:</strong>{" "}
            {movie.academyAwardNominations}
          </li>
          <li>
            <strong>Academy Award Wins:</strong> {movie.academyAwardWins}
          </li>
          <li>
            <strong>Box Office Revenue in Millions:</strong>{" "}
            {movie.boxOfficeRevenueInMillions}
          </li>
          <li>
            <strong>Budget in Millions:</strong> {movie.budgetInMillions}
          </li>
          <li>
            <strong>Rotten Tomatoes Score:</strong>{" "}
            {Math.round(movie.rottenTomatoesScore)}
          </li>
        </ul>
      </main>
    </>
  );
}
