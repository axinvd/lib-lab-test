import styles from "./loading.module.css";
import Image from "next/image";

export const Loading = () => {
  return (
    <Image
      src="/logo.svg"
      alt="Loading"
      className={styles.loading}
      width={240}
      height={240}
    />
  );
};
