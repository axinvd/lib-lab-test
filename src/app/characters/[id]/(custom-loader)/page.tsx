import { notFound } from "next/navigation";
import { api } from "@/api/api";
import Link from "next/link";
import { Header } from "@/shared/components/header/header";
import { Stack } from "@mui/material";
import { CharacterCard } from "./components/characterCard";

export default async function Character({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const characterResponse = await api.getCharacter(id);
  const quotesResponse = await api.getCharacterQuotes(id, 1, 1);

  if (characterResponse.status !== 200) {
    notFound();
  }

  const character = characterResponse.data;

  return (
    <>
      <Header title={character.name} />
      <Stack padding={2} alignItems="center">
        <ul>
          <CharacterCard
            character={character}
            isHasQuotes={
              quotesResponse.status === 200 &&
              quotesResponse.data.docs.length > 0
            }
          />
        </ul>
      </Stack>
    </>
  );
}
