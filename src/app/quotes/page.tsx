import { Header } from "@/shared/components/header/header";
import styles from "./page.module.css";
import { api } from "@/api/api";
import { Pagination } from "@/shared/components/pagination/pagination";
import { renderLinkItem } from "@/shared/helpers/renderLinkItem";
import { notFound } from "next/navigation";

export default async function Quotes({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const page = Number((await searchParams).page ?? 1);
  const quotesResponse = await api.getQuotes(page);

  if (quotesResponse.status !== 200) {
    notFound();
  }

  const quotes = quotesResponse.data;

  return (
    <>
      <Header title="Quotes" />
      <main className={styles.main}>
        <ul>{renderLinkItem(quotes.docs, "/quotes")}</ul>
      </main>
      <Pagination page={page} totalPages={quotes.pages} url="/quotes" />
    </>
  );
}
