import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

export const Header = ({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ gap: 2, alignItems: "center" }}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo.svg"
            alt="Lord of the Rings"
            width={32}
            height={32}
          />
        </Link>
        <h1>{title}</h1>
        {children}
      </Toolbar>
    </AppBar>
  );
};
