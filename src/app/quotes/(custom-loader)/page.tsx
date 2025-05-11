import { Header } from "@/shared/components/header/header";
import { api } from "@/api/api";
import { Pagination } from "@/shared/components/pagination/pagination";
import { notFound } from "next/navigation";
import { Box } from "@mui/material";
import { Card } from "@/shared/components/card/card";

export default async function Quotes({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const queryParams = await searchParams;
  const page = Number(queryParams.page ?? 1);
  const quotesResponse = await api.getQuotes(page);

  if (quotesResponse.status !== 200) {
    notFound();
  }

  const quotes = quotesResponse.data;

  return (
    <>
      <Header title="Quotes" />
      <Box display="flex" flexWrap="wrap" gap={2} padding={2}>
        {quotes.docs.map((el) => (
          <Card key={el._id} id={el._id} text={el.dialog} url="/quotes" />
        ))}
      </Box>
      <Pagination page={page} totalPages={quotes.pages} />
    </>
  );
}
