import { api } from "@/api/api";
import { Card } from "@/shared/components/card/card";
import { Header } from "@/shared/components/header/header";
import { Pagination } from "@/shared/components/pagination/pagination";
import { Box } from "@mui/material";
import { notFound } from "next/navigation";

export default async function CharacterQuotes({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const id = (await params).id;
  const characterResponse = await api.getCharacter(id);
  const queryParams = await searchParams;
  const page = Number(queryParams.page ?? 1);
  const quotesResponse = await api.getCharacterQuotes(id, page);

  if (quotesResponse.status !== 200 || characterResponse.status !== 200) {
    notFound();
  }
  const character = characterResponse.data;
  const quotes = quotesResponse.data;

  return (
    <>
      <Header title={`${character.name} Quotes`} />
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
