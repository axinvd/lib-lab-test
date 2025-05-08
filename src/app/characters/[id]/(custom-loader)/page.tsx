import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { api } from "@/api/api";
import Link from "next/link";
import { Header } from "@/shared/components/header/header";
import { renderItem } from "@/shared/helpers/renderItem";
import { omit } from "lodash";

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
      <Header title={character.name}>
        {quotesResponse.status === 200 &&
          quotesResponse.data.docs.length > 0 && (
            <Link href={`/characters/${id}/quotes`}>View Character Quotes</Link>
          )}
      </Header>
      <main className={styles.main}>
        <ul>
          {renderItem(omit(character, ["_id", "name", "wikiUrl"]))}
          {character.wikiUrl && (
            <li>
              <strong>Wiki URL:</strong>{" "}
              <Link href={character.wikiUrl} target="_blank">
                link
              </Link>
            </li>
          )}
        </ul>
      </main>
    </>
  );
}
