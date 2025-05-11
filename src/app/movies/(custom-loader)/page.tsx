import { api } from "@/api/api";
import { Header } from "@/shared/components/header/header";
import { Pagination } from "@/shared/components/pagination/pagination";
import { Grid } from "@mui/material";
import { notFound } from "next/navigation";
import { MovieCard } from "./components/movieCard";

export default async function Movies({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const queryParams = await searchParams;
  const page = Number(queryParams.page ?? 1);
  const moviesResponse = await api.getMovies(page);

  if (moviesResponse.status !== 200) {
    notFound();
  }
  const quotesResponses = await Promise.all(
    moviesResponse.data.docs.map((movie) =>
      api.getMovieQuotes(movie._id, 1, 1),
    ),
  );
  const movies = moviesResponse.data;

  return (
    <>
      <Header title="Movies" />
      <Grid container spacing={2} padding={{ xs: 2, md: 6 }}>
        {movies.docs.map((movie, i) => (
          <Grid key={movie._id} size={{ xs: 12, sm: 6 }} height={"100%"}>
            <MovieCard
              movie={movie}
              url="/movies"
              isHasQuotes={
                quotesResponses[i].status === 200 &&
                quotesResponses[i].data.docs.length > 0
              }
            />
          </Grid>
        ))}
      </Grid>
      <Pagination page={page} totalPages={movies.pages} />
    </>
  );
}
