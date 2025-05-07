import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <ul>
        <li>
          <Link href="/movies">Movies</Link>
        </li>
        <li>
          <Link href="/characters">Characters</Link>
        </li>
        <li>
          <Link href="/quotes">Quotes</Link>
        </li>
      </ul>
    </main>
  );
}
