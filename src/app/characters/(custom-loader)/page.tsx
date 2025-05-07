import { api } from "@/api/api";
import { Pagination } from "@/shared/components/pagination/pagination";
import { renderLinkItem } from "@/shared/helpers/renderLinkItem";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { Header } from "@/shared/components/header/header";

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
        <h2>Search</h2>
        <form>
          <input type="text" name="name" defaultValue={name} />
          <button type="submit">Search</button>
        </form>
      </Header>
      <main className={styles.main}>
        <ul>{renderLinkItem(characters.docs, "/characters")}</ul>
      </main>
      <Pagination page={page} totalPages={characters.pages} url="/characters" />
    </>
  );
}
