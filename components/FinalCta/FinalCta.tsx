import Link from "next/link";
import styles from "./FinalCta.module.css";

export default function FinalCta() {
  return (
    <section
      id="contacts"
      className={styles.finalCta}
      aria-labelledby="final-cta-title"
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>ГОТОВЫ ОБСУДИТЬ?</span>

          <h2 id="final-cta-title" className={styles.title}>
            Есть задача, которую нужно решить?
          </h2>

          <p className={styles.description}>
            Расскажите о бизнесе и текущей ситуации — обсудим, что можно
            улучшить и с чего начать.
          </p>

          <Link href="#contacts" className={styles.primaryAction}>
            Обсудить задачу
          </Link>
        </div>

        <div className={styles.contacts}>
          <p className={styles.contactTitle}>
            Напишите мне в Telegram — разберём вашу задачу.
          </p>

          <div className={styles.contactLinks} aria-label="Способы связи">
            <span>Telegram →</span>
            <span>Instagram →</span>
            <span>Email →</span>
          </div>
        </div>
      </div>
    </section>
  );
}
