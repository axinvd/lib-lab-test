import { api } from "@/api/api";
import { Card } from "@/shared/components/card/card";
import { Header } from "@/shared/components/header/header";
import { Pagination } from "@/shared/components/pagination/pagination";
import { Box } from "@mui/material";
import { notFound } from "next/navigation";
import { Search } from "./components/search";

export default async function Characters({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; name?: string }>;
}) {
  const params = await searchParams;
  const page = Number(params.page ?? 1);
  const name = params.name;
  const charactersResponse = await api.getCharacters(page, name);

  if (charactersResponse.status !== 200) {
    notFound();
  }

  const characters = charactersResponse.data;

  return (
    <>
      <Header title="Characters">
        <Search name={name ?? ""} />
      </Header>
      <Box display="flex" flexWrap="wrap" gap={2} padding={2}>
        {characters.docs.map((character) => (
          <Card
            key={character._id}
            id={character._id}
            text={character.name}
            url="/characters"
          />
        ))}
      </Box>
      <Pagination page={page} totalPages={characters.pages} />
    </>
  );
}
