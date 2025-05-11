import Link from "next/link";
import { api } from "@/api/api";
import { notFound } from "next/navigation";
import { Header } from "@/shared/components/header/header";
import { Stack } from "@mui/material";

export default async function Quote({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const quoteResponse = await api.getQuote(id);

  if (quoteResponse.status !== 200) {
    notFound();
  }
  const movieResponse = await api.getMovie(quoteResponse.data.movie);
  const characterResponse = await api.getCharacter(
    quoteResponse.data.character,
  );

  const quote = quoteResponse.data;

  return (
    <>
      <Header title={quote.dialog} />
      <Stack padding={2} alignItems="center">
        <ul>
          {movieResponse.status === 200 && (
            <li>
              <strong>Movie:</strong> {movieResponse.data.name}
            </li>
          )}
          {characterResponse.status === 200 && (
            <li>
              <strong>Character:</strong>{" "}
              <Link href={`/characters/${quote.character}`}>
                {characterResponse.data.name}
              </Link>
            </li>
          )}
        </ul>
      </Stack>
    </>
  );
}
