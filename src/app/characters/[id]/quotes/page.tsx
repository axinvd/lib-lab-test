import { Header } from "@/shared/components/header/header";
import styles from "./page.module.css";
import { api } from "@/api/api";
import { Pagination } from "@/shared/components/pagination/pagination";
import { renderLinkItem } from "@/shared/helpers/renderLinkItem";
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
  const page = Number((await searchParams).page ?? 1);
  const quotesResponse = await api.getCharacterQuotes(id, page);

  if (quotesResponse.status !== 200 || characterResponse.status !== 200) {
    notFound();
  }
  const character = characterResponse.data;
  const quotes = quotesResponse.data;

  return (
    <>
      <Header title={`${character.name} Quotes`} />
      <main className={styles.main}>
        {quotes.docs.length > 0 ? (
          <ul>{renderLinkItem(quotes.docs, "/quotes")}</ul>
        ) : (
          <p>No quotes found</p>
        )}
      </main>
      <Pagination
        page={page}
        totalPages={quotes.pages}
        url={`/characters/${id}/quotes`}
      />
    </>
  );
}
