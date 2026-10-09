import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.content}>
        <p className={styles.eyebrow}>SMM · ТАРГЕТОВАНА РЕКЛАМА · СТРАТЕГІЯ</p>

        <h1 id="hero-title" className={styles.title}>
          Допомагаю бізнесу залучати клієнтів через рекламу та соціальні мережі.
        </h1>

        <p className={styles.description}>
          Спочатку розбираюся у вашому запиті, а потім підбираю рішення
          відповідно до цілей бізнесу — без шаблонного підходу.
        </p>

        <div className={styles.actions}>
          <Link href="#contacts" className={styles.primaryAction}>
            Обговорити завдання
          </Link>

          <Link href="#cases" className={styles.secondaryAction}>
            Переглянути кейси
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <div
          className={styles.imagePlaceholder}
          role="img"
          aria-label="photo"
        >
          <span>photo</span>
        </div>
      </div>
    </section>
  );
}
