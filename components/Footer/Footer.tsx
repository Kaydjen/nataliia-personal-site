import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <span className={styles.name}>Nataliia</span>

          <div className={styles.contacts}>
            <span>Telegram</span>
            <span aria-hidden="true">·</span>
            <span>Instagram</span>
            <span aria-hidden="true">·</span>
            <span>Email</span>
          </div>
        </div>

        <div className={styles.bottom}>© 2026 Nataliia</div>
      </div>
    </footer>
  );
}
