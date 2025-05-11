import { api } from "@/api/api";
import { Header } from "@/shared/components/header/header";
import { Pagination } from "@/shared/components/pagination/pagination";
import { Card } from "@/shared/components/card/card";
import { Box } from "@mui/material";
import { notFound } from "next/navigation";

export default async function MovieQuotes({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const id = (await params).id;
  const movieResponse = await api.getMovie(id);
  const queryParams = await searchParams;
  const page = Number(queryParams.page ?? 1);
  const quotesResponse = await api.getMovieQuotes(id, page);

  if (quotesResponse.status !== 200 || movieResponse.status !== 200) {
    notFound();
  }
  const movie = movieResponse.data;
  const quotes = quotesResponse.data;

  return (
    <>
      <Header title={`${movie.name} Quotes`} />
      <Box display="flex" flexWrap="wrap" gap={2} padding={2}>
        {quotes.docs.length > 0 ? (
          quotes.docs.map((el) => (
            <Card key={el._id} id={el._id} text={el.dialog} url="/quotes" />
          ))
        ) : (
          <p>No quotes found</p>
        )}
      </Box>
      <Pagination page={page} totalPages={quotes.pages} />
    </>
  );
}
