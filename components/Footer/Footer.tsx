import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Link href="/" className={styles.name}>
          Nataliia
        </Link>

        <span className={styles.copyright}>
          © {new Date().getFullYear()} Nataliia
        </span>
      </div>
    </footer>
  );
}
