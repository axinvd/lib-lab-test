import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";

export const Header = ({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo.svg"
            alt="Lord of the Rings"
            width={25}
            height={25}
          />
        </Link>
        <h1>{title}</h1>
      </div>
      {children}
    </header>
  );
};
